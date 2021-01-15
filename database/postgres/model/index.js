const { Pool } = require('pg');

const pool = new Pool({
  host: '3.101.131.133',
  user: 'postgres',
  password: 'postgres',
  database: 'products'
});

pool.connect(err => {
  if (err) {
    console.log(`Could not connect to Postgres due to ${err}`);
  } else {
    console.log('Connected to Postgres');
  }
});

module.exports = {
  pool
}