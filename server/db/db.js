import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Heroku connections
});

const client = await pool.connect();

export default client;