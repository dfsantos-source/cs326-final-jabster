import express from 'express'
import { faker } from '@faker-js/faker';

const app = express()
const router = express.Router()

//put endpoints here
//ex. router.get router.put 

// Posts: (dane)
// POST create a post (/posts/create):
// PUT update a post (/posts/update/:id)
// DELETE a post (/posts/delete/:id):
// GET read all posts (/posts/get/all):


// create a post
router.post('/create', (req, res) => {
    const post = {
        id: faker.random.number({'max':100}),
        name: req.body.name,
        user_id: faker.random.number({'max':100}),
        cuisine: req.body.cuisine,
        likes: faker.random.number({'max':100}),
        dislikes: faker.random.number({'max':100}),
        description: req.body.description,
        directions: req.body.directions,
        ingredients: req.body.ingredients
    }
    try {
        res.json(post)
    }
    catch {
        res.status(404).json({ err: 'Error creating post' });
    }
})

// update a post id
router.put('/update/:postId', (req, res) => {
    try {
        res.json({post: req.body, message: "Succesfully updated post"})
    }
    catch {
        res.status(404).json({ err: 'Error updating post' });
    }
})

// delete a post by id
router.delete('/delete/:postId', (req, res) => {
    try {
        res.json({message: 'Successfully deleted.'})
    }
    catch {
        res.status(404).json({ err: 'Error deleting post' });
    }
})

// get all posts
router.get('/get/all', (req, res) => {
    const post1 = {
        id: faker.random.number({'max':100}),
        name: 'Alfredo',
        user_id: faker.random.number({'max':100}),
        cuisine: 'Italian',
        likes: faker.random.number({'max':100}),
        dislikes: faker.random.number({'max':100}),
        description: 'Look at this amazing alfredo.',
        directions: '1 boil water, 2 add sauce, bake in oven for 300 degrees 30 min',
        ingredients: [`{id: 1, name: 'Peas', amount:'1 bag', post_id:2}, {id: 3, name: 'Corn', amount:'1 can', post_id:2}}`]
    }
    const post2 = {
        id: faker.random.number({'max':100}),
        name: 'Spaghetti',
        user_id: faker.random.number({'max':100}),
        cuisine: 'Italian',
        likes: faker.random.number({'max':100}),
        dislikes: faker.random.number({'max':100}),
        description: 'Look at this amazing spaghetti.',
        directions: '1 boil water, 2 add sauce, add meatballs, serve',
        ingredients: [`{id: 1, name: 'Peas', amount:'1 bag', post_id:2}, {id: 3, name: 'Corn', amount:'1 can', post_id:2}}`]
    }
    try {
        res.json([post1, post2])
    }
    catch {
        res.status(404).json({ err: 'Error reading all post' });
    }
})

export default router
