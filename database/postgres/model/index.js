const { Pool } = require('pg');

const pool = new Pool({
  database: 'products'
});

pool.connect(err => {
  if (err) {
    console.log(`Could not connect to Postgres due to ${err}`);
  }
  console.log('Connected to Postgres');
});

module.exports = {
  pool
}