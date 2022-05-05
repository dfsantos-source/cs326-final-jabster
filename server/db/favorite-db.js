import client from "./db.js";


export const getFavorites = async (userId) => {
    const queryText = "Select * from User_Favorites WHERE id = $1"
    const res = await client.query(queryText, [userId])
    return res.rows
}

export const addFavorites = async (body, userId) => {
    const { postId } = body
    const queryText = "INSERT INTO User_Favorites (userId, postId) VALUES ($1, $2) RETURNING *"
    const res = await client.query(queryText, [userId, postId])
    return res.rows
}

export const deleteFavorite = async (postId) => {
    const queryText = "DELETE FROM User_Favorite WHERE id = $1"
    const res = await client.query(queryText, [postId])
    return res.rows
}

