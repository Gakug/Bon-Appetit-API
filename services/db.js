// Include .env file
require('dotenv').config();

// Include MySQL
const mysql = require('mysql');

// Set variables from .env file
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

// Create connection
const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.log('MySQL connection error: ', err.stack);
        return;
    }
    console.log('MySQL connected');
});

// Export connection
module.exports = db;