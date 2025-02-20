BEGIN;

SET
client_encoding = 'LATIN1';

CREATE TABLE watchlist
(
    id varchar(256) NOT NULL,
    created TIMESTAMP DEFAULT now()
);

ALTER TABLE ONLY watchlist
    ADD CONSTRAINT watchlist_pkey PRIMARY KEY (id);

COMMIT;
