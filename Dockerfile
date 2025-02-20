FROM postgres
ENV POSTGRES_PASSWORD=docker
ENV POSTGRES_DB=token_watch
COPY migrate.sql /docker-entrypoint-initdb.d/