import client from "./db.js";

export const registerUser = async (body) => {
    const queryText = "INSERT INTO Users(username, email, name, password) VALUES ($1, $2, $3, $4) RETURNING *"
    const res = await client.query(queryText, [body.username, body.email, body.name, body.password])
    return res.rows
}

export const findUserById = async (id) => {
    const queryText = 'SELECT * FROM Users WHERE id = $1'

    const res = await client.query(queryText, [id]);
    return res.rows;
}

// // auth methods
export const findUser = async (username) => {
    const queryText = `
        SELECT * FROM Users WHERE username=($1)
    `
    const res = await client.query(queryText, [username])
    return res.rows
}

export const validateUser = async (username, password) => {
    const queryText = `
        SELECT * FROM Users WHERE username=($1) and password=($2)
    `
    const res = await client.query(queryText, [username, password])
    return res.rows;
}