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