import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Heroku connections
});

const client = await pool.connect();

async function initDB() {
    const queryText = `
        CREATE TABLE if not exists Users(
            "id" Serial PRIMARY KEY,
            "email" VARCHAR(255),
            "name" VARCHAR(255),
            "password" VARCHAR(255)
        );
        
        CREATE TABLE if not exists Recipe_Posts(
            "id" Serial PRIMARY KEY,
            "name" VARCHAR,
            "userId" INTEGER REFERENCES Users(id),
            "cuisine" VARCHAR NOT NULL,
            "likes" INTEGER NOT NULL,
            "dislikes" INTEGER NOT NULL,
            "description" VARCHAR NOT NULL,
            "directions" VARCHAR NOT NULL,
            "image" VARCHAR NOT NULL,
            "Ingredients" VARCHAR NOT NULL,
            "tag" VARCHAR(50) NOT NULL
        );
        
        CREATE TABLE if not exists User_Favorites(
            "id" Serial PRIMARY KEY,
            "userId" INTEGER REFERENCES Users(id),
            "postId" INTEGER REFERENCES Recipe_Posts(id)
        );
        
        
        CREATE TABLE if not exists Cart_Item(
            "id" Serial PRIMARY KEY,
            "userId" INTEGER REFERENCES Users(id),
            "name" VARCHAR(255) ,
            "amount" VARCHAR(255)
        );
        
        
        CREATE TABLE if not exists User_Likes(
            "id" Serial PRIMARY KEY,
            "userId" INTEGER REFERENCES Users(id),
            "postId" INTEGER REFERENCES Recipe_Posts(id)
        );
        
        CREATE TABLE if not exists User_Dislikes(
            "id" Serial PRIMARY KEY,
            "userId" INTEGER REFERENCES Users(id),
            "postId" INTEGER REFERENCES Recipe_Posts(id)
        );         
    `;
    client.query(queryText);
}

async function close() {
    client.release();
    await pool.end();
}

await initDB();

export default client;