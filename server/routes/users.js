import express, { response } from 'express'
import faker from '@faker-js/faker'
import * as userQueries from '../db/users-db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    const body = req.body

    if (body !== undefined) {
        console.log("yo")
        const user = await userQueries.registerUser(body)
        res.status(200).json(user)
    }
    else {
        res.status(400).json({ error: "error registering" })
    }
})

router.get("/get/user", async (req, res) => {
    try {
        const userId = req.user.id
        const user = await userQueries.findUserById(userId)
        res.status(200).json(user);

    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/update/user', async (req, res) => {
    let id = req.user.id;
    const body = req.body;
    try {
        if (body.username !== undefined) {
            const newUser = await userQueries.updateName(id, body)
            res.status(200).json(newUser)
        }
        else if (body.password !== undefined) {
            const newPass = await userQueries.updatePassword(id, body)
            res.status(200).json(newPass)
        }
    } catch (error) {
        res.status(400).json(error)
    }

})

export default router