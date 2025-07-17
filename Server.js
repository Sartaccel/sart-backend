// const express = require("express");
// const cors = require("cors");
// require('dotenv').config();
// const mongoose = require('mongoose');
// const path = require('path');
// const taskRouter = require("./Routes/routes");

// // Initialize Express app
// const app = express();

// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // Middleware to serve static files from the 'uploads' directory
// app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch(err => console.error('Failed to connect to MongoDB:', err));

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // Routes
// app.use("/api/task", taskRouter);

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// require('dotenv').config();
// const mysql = require('mysql2/promise'); // Use promise-based MySQL
// const path = require('path');
// const taskRouter = require("./Routes/routes");

// // Initialize Express app
// const app = express();

// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // Middleware to serve static files from the 'uploads' directory
// app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// // MySQL connection
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// pool.getConnection()
//   .then(connection => {
//     console.log('Connected to MySQL!');
//     connection.release(); // Release the connection back to the pool
//   })
//   .catch(err => {
//     console.error('Failed to connect to MySQL:', err);
//   });

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // Pass the pool to your routes
// app.use((req, res, next) => {
//   req.pool = pool;
//   next();
// });

// // Routes
// app.use("/api/task", taskRouter);

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });



// const express = require("express");
// const cors = require("cors");
// require('dotenv').config();
// const path = require('path');
// const taskRouter = require("./Routes/routes");
// const { pool, testConnection } = require('./config/db'); // Import the pool and connection test function

// // Initialize Express app
// const app = express();

// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // Middleware to serve static files from the 'uploads' directory
// app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// // Test MySQL connection
// testConnection();

// // Pass the pool to your routes
// app.use((req, res, next) => {
//   req.pool = pool;
//   next();
// });

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // Routes
// app.use("/api/task", taskRouter);

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });



const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mysql = require('mysql2/promise'); // Use promise-based MySQL
const path = require('path');
const taskRouter = require("./Routes/routes");

// Initialize Express app
const app = express();

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Middleware to serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/gallery', express.static(path.join(__dirname, 'gallery')));
app.use('/resume', express.static(path.join(__dirname, 'resume')));

// MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL!');
    connection.release(); // Release the connection back to the pool
  })

  .catch(err => {
    console.error('Failed to connect to MySQL:', err);
  });

// Middleware to add db pool to req object
app.use((req, res, next) => {
  req.db = pool; // Set the pool as req.db
  next();
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/task", taskRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
