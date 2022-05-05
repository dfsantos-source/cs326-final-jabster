import client from "./db.js";

export const createPost = async (userId, body) => {
    const queryText = "INSERT INTO Recipe_Posts(name, userId, cuisine, likes, dislikes, description, directions, image, Ingredients, tag) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const res = await client.query(queryText, [body.name, userId, body.cuisine, 0, 0, body.description, body.directions, body.image, body.ingredients, body.tag]);
    return res.rows
}

export const updatePost = async (postId, body) => {
    const queryText = "UPDATE Recipe_Posts SET name = ($1), description = ($2), Ingredients = ($3), directions = ($4), tag = ($5), cuisine = ($6) WHERE id = ($7)";
    const res = await client.query(queryText, [body.name, body.description, body.ingredients, body.directions, body.tag, body.cuisine, postId]);
    return res.rows
}

export const deletePost = async (postId) => {
    const queryText = "DELETE * FROM Recipe_Posts WHERE id = ($1)";
    const res = await client.query(queryText, [postId]);
    return res.rows
}

export const getAllPosts = async () => {
    const queryText = "SELECT * FROM Recipe_Posts";
    const res = await client.query(queryText)
    return res.rows
}

export const getUserPosts = async (userId) => {
    const queryText = "SELECT * FROM Recipe_Posts WHERE userId = ($1)";
    const res = await client.query(queryText, [userId]);
    return res.rows
}

export const getRandomPost = async (body) => {
    if (body.tag === "" && body.cuisine === "") {
        const queryText = "SELECT * FROM Recipe_Posts"
        const res = await client.query(queryText)
        return res.rows
    }
    else if (body.tag === "" && body.cuisine !== "") {
        const queryText = "SELECT * FROM Recipe_Posts WHERE cuisine = $1"
        const res = await client.query(queryText, [body.cuisine])
        return res.rows
    }
    else if (body.tag !== "" && body.cuisine === "") {
        const queryText = "SELECT * FROM Recipe_Posts WHERE tag = $1"
        const res = await client.query(queryText, [body.tag])
        return res.rows
    }
    else {
        const queryText = "SELECT * FROM Recipe_Posts WHERE tag = $1 AND cuisine = $2"
        const res = await client.query(queryText, [body.tag, body.cuisine])
        return res.rows
    }
}

export const getPostbyId = async (postId) => {
    const queryText = "SELECT * FROM Recipe_Posts WHERE id = ($1)"
    const res = await client.query(queryText, [postId]);
    return res.rows
}

export const likePost = async (postId) => {
    const queryText = "UPDATE likes = likes + 1 WHERE id = ($1)"
    const res = await client.query(queryText, [postId]);
    return res.rows
}

export const dislikePost = async (postId) => {
    const queryText = "UPDATE dislikes = dislikes + 1 WHERE id = ($1)"
    const res = await client.query(queryText, [postId]);
    return res.rows
}

export const addUserLikes = async (userId, postId) => {
    const queryText = "INSERT INTO User_Likes(userId, postId) VALUES ($1, $2) "
    const res = await client.query(queryText, [userId, postId]);
    return res.rows
}

export const addUserDislikes = async (userId, postId) => {
    const queryText = "INSERT INTO User_Dislikes(userId, postId) VALUES ($1, $2) "
    const res = await client.query(queryText, [userId, postId]);
    return res.rows
}

export const getUserLikes = async (userId, postId) => {
    const queryText = "SELECT * FROM User_Likes WHERE userId = $1 AND postId = $2";
    const res = await client.query(queryText, [userId, postId]);
    return res.rows;
}

export const getUserDislikes = async (userId, postId) => {
    const queryText = "SELECT * FROM User_Dislikes WHERE userId = $1 AND postId = $2";
    const res = await client.query(queryText, [userId, postId]);
    return res.rows;
}