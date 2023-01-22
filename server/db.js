const Pool = require("pg").Pool;
const path = require('path');
const {migrate} = require('postgres-migrations');
require('dotenv').config({path: "./vars/.env"});

// database connection to server
const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
});

const db = {
    runMigrations: async function(){
        const client = await pool.connect();
        try {
            await migrate({client}, path.resolve(__dirname, 'migrations/sql'));
        } catch (error) {
            console.error('migration failed', error);
        } finally {
            client.release();
        }
    }
}

module.exports = {
    db,
    pool
}