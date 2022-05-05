import client from "./db.js";

const getCart = async (userId) => {
    const queryText = `
        SELECT * FROM Cart_Item WHERE id=($1) RETURNING *
    `;
    const res = await client.query(queryText, [userId]);
    return res.rows;
}

const addCart = async (body, userId) => {
    const queryText = `
        INSERT INTO Cart_Item (userId, name, amount) VALUES ($1, $2, $3) RETURNING *
    `
    const res = await client.query(queryText, [userId, body.name, body.amount]);
    return res.rows;
}

const deleteCart = async (cartId) => {
    const queryText = `
        DELETE FROM Cart_Item WHERE id=($1) RETURNING *
    `;
    const res = await client.query(queryText, [cartId]);
    return res.rows;
}

export default { getCart, addCart, deleteCart };