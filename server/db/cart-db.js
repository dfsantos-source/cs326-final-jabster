import client from "./db.js";

const getCart = async (userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const addCart = async (body, userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const deleteCart = async (cartId, userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}