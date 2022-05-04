import client from "./db.js";

const loginUser = async (body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const registerUser = async (body) => {
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
