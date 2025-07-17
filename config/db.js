const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL!');
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Failed to connect to MySQL:', err);
  }
};

// Export the pool and connection test function
module.exports = { pool, testConnection };
