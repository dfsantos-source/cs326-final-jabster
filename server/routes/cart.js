import express from 'express'
import faker from '@faker-js/faker'

const router = express.Router()

router.get("/:userId/get", (req, res) => {
    const userId = req.params.userId
    const data = [{ id: faker.random.number({ max: 100 }), userId: userId, name: "butter", amount: "2 tablespoons" }, { id: 2, userId: userId, name: "milk", amount: "1 gallon" }, { id: 3, userId: userId, name: "eggs", amount: "1 dozen" }]
    if (userId !== undefined) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ messsage: "Could not find user" });
    }
})

router.post("/:userId/add", (req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    if (body !== undefined && userId !== undefined) {
        res.status(200).json({ messsage: "successfully created cart item", data: { id: 1, userId: userId, name: body.name, amount: body.amount } });
    }
    else {
        res.status(404).json({ messsage: "body or userId not found" });
    }
})

router.delete("/:userId/delete/:cartId", (req, res) => {
    const userId = req.params.userId;
    const cartId = req.params.cartId;

    if (userId && cartId !== undefined) {
        res.status(200).json({ messsage: `cart item ${cartId} has been deleted` });
    }
    else {
        res.status(404).json({ messsage: "cart ittem could not be found" });
    }
})

export default router