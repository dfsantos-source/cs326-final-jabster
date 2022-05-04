import client from "./db.js";


const getFavorites = async (userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const addFavorites = async (body, userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const deleteFavorite = async (postId, userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

