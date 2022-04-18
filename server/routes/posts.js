import express from 'express'

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
        id: 2,
        name: 'Alfredo',
        user_id: 21,
        cuisine: 'Italian',
        likes: 21,
        dislikes: 0,
        description: 'Look at this amazing alfredo.',
        directions: '1 boil water, 2 add sauce, bake in oven for 300 degrees 30 min'
    }
    try {
        res.json({post})
    }
    catch {
        res.status(404).json({ err: 'Error creating post' });
    }
})

// update a post id
router.put('/update/:postId', (req, res) => {
    const post = {
        id: 2,
        name: 'Alfredo',
        user_id: 21,
        cuisine: 'Italian',
        likes: 21,
        dislikes: 0,
        description: 'Look at this amazing alfredo.',
        directions: '1 boil water, 2 add sauce, bake in oven for 300 degrees 30 min'
    }
    try {
        res.json(post)
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
        id: 2,
        name: 'Alfredo',
        user_id: 21,
        cuisine: 'Italian',
        likes: 21,
        dislikes: 0,
        description: 'Look at this amazing alfredo.',
        directions: '1 boil water, 2 add sauce, bake in oven for 300 degrees 30 min'
    }
    const post2 = {
        id: 3,
        name: 'Spaghetti',
        user_id: 21,
        cuisine: 'Italian',
        likes: 21,
        dislikes: 0,
        description: 'Look at this amazing spaghetti.',
        directions: '1 boil water, 2 add sauce, add meatballs, serve'
    }
    try {
        res.json([post1, post2])
    }
    catch {
        res.status(404).json({ err: 'Error reading all post' });
    }
})

export default router
