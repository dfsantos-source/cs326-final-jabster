import express from 'express'
import faker from '@faker-js/faker'
import cartDB from '../db/cart-db.js'
import cartDb from '../db/cart-db.js'

const router = express.Router()

router.get("/:userId/get", async(req, res) => {
    const userId = req.params.userId
    if (userId === undefined) {
        res.status(404).json({ message: "userId not found"});
    }
    try {
        const cart = await cartDB.getCart(userId);
        res.status(200).json(cart);
    }
    catch {
        res.status(404).json(err);
    }
})

router.post("/:userId/add", async(req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    if (body === undefined || userId === undefined) {
        res.status(404).json({ messsage: "body or userId not found" });
    }
    try {
        const cartItem = await cartDB.addCart(body, userId);
        res.status(200).json(cartItem);
    }
    catch(err) {
        res.status(404).json(err);
    }
})

router.delete("/:userId/delete/:cartId", async(req, res) => {
    const userId = req.params.userId;
    const cartId = req.params.cartId;

    if (userId === undefined || cartId == undefined) {
        res.status(404).json({ messsage: "userId or cartId not found" });
    }
    try {
        const deleted = await cartDB.deleteCart(cartId);
        res.status(200).json(deleted);
    }
    catch(err) {
        res.status(404).json(err);
    }
})

export default router