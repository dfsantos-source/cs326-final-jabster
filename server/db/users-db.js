import client from "./db.js";

const loginUser = async (body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

export const registerUser = async (body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const updatePassword = async (userId, body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const updateName = async (userId, body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

// // auth methods
export const findUser = async(username) => {
    const queryText = `
        SELECT * FROM Users WHERE username=($1)
    `
    const res = await client.query(queryText, [username])
    return res.rows
}

export const validateUser = async(username, password) => {
    const queryText = `
        SELECT * FROM Users WHERE username=($1) and password=($2)
    `
    const res = await client.query(queryText, [username, password])
    return res.rows;
}