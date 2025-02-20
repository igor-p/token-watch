This application queries real-time crypto market data, via the Coingecko api, to show a listing of top currencies in a
minimalist-inspired interface.

Each row in the table has a star icon that allows you to add the token to a watchlist. You can see the watchlist in
another other tab on the main page. Clicking on the star of a watched token will un-watch it.

## Getting API access

Before using this app, you should generate a **free** API key from CoinGecko.
See [this guide](https://support.coingecko.com/hc/en-us/articles/21880397454233-User-Guide-How-to-sign-up-for-CoinGecko-Demo-API-and-generate-an-API-key)
to create your account and generate an api key.

_Note that the free API works without a key, but it may help with rate limiting to use it._

## Setting up the database via docker

We use docker to initialize a simple postgres database with a table to store the tokens that are in our watchlist.

Run the following command to build the docker image:

```shell
docker build -t token-watch-postgres ./
```

Then enter the next command to run the image as a container (which will run the database locally):

```shell
docker run -d --name token-watch-postgres-container -p 5432:5432 token-watch-postgres
```

## Setting up the server

This app uses a Node server (via Fastify) to talk to the database and manage our watchlist.

From the root directory, navigate to the server:

```shell
cd server
```

Install dependencies:

```shell
pnpm install
#or
npm install
```

Start the server. It should be listening on http://localhost:8080

```shell
node server
```

You can call the server endpoint with [localhost:8080/watchlist(localhost:8080/watchlist)
## Setting up the frontend

Go back to the root project directory if you need to (`cd ../`), and navigate to the `frontend` folder:

```shell
cd frontend
```

### Set up environment variable

While in the `frontend/` folder, with the Coingecko API key you generated above, create a `.env` file and add the
variable `NEXT_PUBLIC_API_KEY` with the API key
as the value

```dotenv
NEXT_PUBLIC_API_KEY=your_key_here
```

You can also copy the provided `.env.template` file to a `.env` file and replace the value.

### Install dependencies
```bash
pnpm install
# or
npm install

```

### Run the development server

```bash
pnpm dev
# or
npm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to start using the app.

## Learn More

Built with [Next.js](https://nextjs.org/), and bootstrapped
with [create-next-app](https://nextjs.org/docs/app/getting-started/installation).

Coingecko free API docs: https://docs.coingecko.com/v3.0.1/reference/introduction