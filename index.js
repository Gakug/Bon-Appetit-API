// Include express
const express = require('express');

// Include .env file
require('dotenv').config();

// Include connection
const db = require('./services/db');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Request from IP - ${req.ip} for ${req.method} ${req.url}`);
    next();
});

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});