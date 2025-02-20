// Import the framework and instantiate it
import Fastify from 'fastify'
import postgres from '@fastify/postgres';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: false
})

// jdbc:postgresql://localhost:5432/token_watch
fastify.register(postgres, {
  connectionString: "postgres://postgres:docker@localhost:5432/token_watch"
})

// Enable CORS for requests from port 3000
await fastify.register(cors, {
  origin: 'http://localhost:3000'
});

// Returns a list of IDs from the watchlist
fastify.get('/watchlist', async function handler(request, reply) {
  try {
    const { rows } = await fastify.pg.query("SELECT id FROM watchlist");
    reply.send(rows.map(({ id }) => id));
  } catch (err) {
    reply.status(500).send({ error: 'Failed to get watchlist', message: err.message });
  }
})

// Adds an id to the watchlist
fastify.post('/watchlist', async function handler(request, reply) {
  if (!request.body) {
    return reply.status(400).send({ error: "missing request body" });
  }
  const { id } = request.body;
  if (!id) {
    return reply.status(400).send({ error: "id is required" });
  }

  try {
    const result = await fastify.pg.query("INSERT INTO watchlist (id) VALUES ($1) RETURNING *", [id]);
    reply.status(201).send(result.rows[0]); // Return inserted row
  } catch (err) {
    reply.status(500).send({ error: 'Failed to add token to watchlist', message: err.message });
  }
})

// Deletes an id from the watchlist
fastify.delete('/watchlist', async function handler(request, reply) {
  if (!request.body) {
    return reply.status(400).send({ error: "missing request body" });
  }
  const { id } = request.body;
  if (!id) {
    return reply.status(400).send({ error: "id is required" });
  }

  try {
    const result = await fastify.pg.query("DELETE FROM watchlist WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return reply.status(404).send({ error: "ID not found in watchlist" });
    }
    reply.status(200).send({ message: `ID ${id} removed from watchlist` });
  } catch (err) {
    reply.status(500).send({ error: 'Failed to delete token to watchlist', message: err.message });
  }
})

// Run the server!
try {
  await fastify.listen({ port: 8080 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}