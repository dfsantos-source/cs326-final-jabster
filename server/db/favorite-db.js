import client from "./db.js";


export const getFavorites = async (userId) => {
    const queryText =
        `Select User_Favorites.id, Recipe_Posts.name, Recipe_Posts.image, Recipe_Posts.ingredients, Recipe_Posts.description, Recipe_Posts.directions
    from User_Favorites 
    INNER JOIN Recipe_Posts ON User_Favorites.postId = Recipe_Posts.id 
    WHERE User_Favorites.userId = $1`
    const res = await client.query(queryText, [userId])
    return res.rows
}

export const hasFavorite = async (userId, body) => {
    const { postId } = body
    const queryText = "SELECT * FROM User_Favorites WHERE userId = $1 AND postId = $2"
    const res = await client.query(queryText, [userId, postId])
    return res.rows
}

export const addFavorites = async (userId, body) => {
    const { postId } = body
    const queryText = "INSERT INTO User_Favorites (userId, postId) VALUES ($1, $2) RETURNING *"
    const res = await client.query(queryText, [userId, postId])
    return res.rows
}

export const deleteFavorite = async (favoriteId) => {
    const queryText = "DELETE FROM User_Favorites WHERE id = $1"
    const res = await client.query(queryText, [favoriteId])
    return res.rows
}