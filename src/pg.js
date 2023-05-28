const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Node-6',
  password: process.env.DB_PASSWORD,
  port: 5432, 
});

module.exports = function(query) {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
};
