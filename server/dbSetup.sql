CREATE DATABASE IF NOT EXISTS `etudesDB`;

CREATE TABLE etude (
  etude_id SERIAL PRIMARY KEY,
    etude_name VARCHAR(255) NOT NULL,
    book VARCHAR(255) NOT NULL,
    composer VARCHAR(255),
    etude_key VARCHAR(255),
    tempo INTEGER,
    rangeHigh VARCHAR(255),
    rangeLow VARCHAR(255),  
);