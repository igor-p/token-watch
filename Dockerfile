FROM postgres
ENV POSTGRES_PASSWORD=tw-local-pw
ENV POSTGRES_DB=token_watch
COPY init.sql /docker-entrypoint-initdb.d/