import express from 'express'
import * as postQuery from './db/posts-db.js'

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
router.post('/create', async (req, res) => {
    try {
        const id = req.user.id;
        const post = await postQuery.createPost(id, req.body);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error creating post' });
    }
})

// update a post id
router.put('/update/:postId', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postQuery.updatePost(id, req.body);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error updating post' });
    }
})

// delete a post by id
router.delete('/delete/:postId', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postQuery.deletePost(id);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error deleting post' });
    }
})

// get all posts
router.get('/get/all', async (req, res) => {

    try {
        const post = await postQuery.getAllPosts();
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error reading all post' });
    }
})

router.get('/get/user/:userId', async (req, res) => {
    
    try {
        const id = req.user.id;
        const post = await postQuery.getUserPosts(id);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: `could not get user ${req.params.userId} posts` });
    }
})

// Posts: (Nolan)
// GET read a specific post (/get/:postId):
// GET read a random post (/get/random):
// PUT like a certain dish (/postId/like):
// PUT dislike a certain dish (/postId/dislike):

router.get('/get/random', async (req, res) => {
    
    try {
        res.json();
    }
    catch {
        res.status(404).json({ err: 'Error getting post' });
    }
})

router.get('/get/:postId', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postQuery.getPostbyId(id);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error getting post' });
    }
})


router.put('/:postId/like', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postQuery.likePost(id);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error liking post' });
    }
})

router.put('/:postId/dislike', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postQuery.dislikePost(id);
        res.json(post);
    }
    catch {
        res.status(404).json({ err: 'Error disliking post' })
    }
})

export default router
