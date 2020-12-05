-- million unique brandname records relational to product information brandname id
CREATE TABLE information (
  id SERIAL PRIMARY KEY,
  description VARCHAR(2000),
  title VARCHAR(200),
  brand VARCHAR(200),
  name VARCHAR(200),
  age VARCHAR(200),
  player_Count VARCHAR(200),
  part_Number VARCHAR(200),
  GTIN BIGINT
);

COPY information (description, title, brand, name, age, player_Count, part_Number, GTIN)
-- CHANGE FILE PATH TO YOUR RELATIVE ABSOLUTE
FROM '/Users/teddykim/HackReactor/rpt23/SDC/Product-Information-Service/seed.csv'
DELIMITER ','
CSV HEADER;