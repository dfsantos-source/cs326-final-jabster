import express, { response } from 'express'
import * as userQueries from '../db/users-db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    const body = req.body;

    if (body !== undefined) {
        const user = await userQueries.registerUser(body);
        res.status(200).json(user);
    }
    else {
        res.status(400).json({ error: "error registering" });
    }
})

router.get("/get/user", async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userQueries.findUserById(userId);
        res.status(200).json(user);

    } catch (error) {
        res.status(400).json(error);
    }
})

export default router