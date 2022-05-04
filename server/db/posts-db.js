import client from "./db.js";

const createPost = async (body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const updatePost = async (postId, body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const deletePost = async (postId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getAllPost = async () => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getUserPosts = async (userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getRandomPost = async (body) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getPostbyId = async (postId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const likePost = async (postId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const dislikePost = async (postId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getUserLikes = async (userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}

const getUserDislikes = async (userId) => {
    const queryText = ""
    const res = await client.query(queryText)
    return res.rows
}