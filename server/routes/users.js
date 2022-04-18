import express, { response } from 'express'
import faker from '@faker-js/faker'

const router = express.Router()

router.get("/login", (req, res) => {
    let body = req.body
    console.log(req.body)
    if (body.email === undefined || body.password === undefined) {
        res.status(404).json("email or password not put entered")
    }
    else {
        res.status(200).json("User has logged in succesfully")
    }
})

router.post('/register', (req, res) => {
    const body = req.body
    if (body.name === undefined || body.email === undefined || body.email === undefined) {
        res.status(404).json("registration failed")
    }
    else {
        res.status(200).json("User registered successfully");
    }
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    if (id !== undefined) {
        const user = {
            id: id,
            email: faker.internet.email(),
            name: faker.name.findName()
        }
        res.status(200).json(user)
    }
    else {
        res.status(400).json("Could not find user")
    }
})

router.put('update/:id', (req, res) => {
    let id = req.params.id;
    const body = req.body

    if (id !== undefined && body !== undefined) {
        res.status(200).json("User updated successfully")
    }
    else {
        res.status(404).json("Failed to update user")
    }

})

export default router