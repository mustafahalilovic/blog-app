const Pool = require("pg").Pool;
require('dotenv').config({path: "./vars/.env"});

// database connection to server
const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
});

module.exports = pool;