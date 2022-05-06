import express from 'express'
import { faker } from '@faker-js/faker';
import * as favoriteQueries from '../db/favorite-db.js'

const router = express.Router()

//put endpoints here
//ex. router.get router.put 

router.get('/user/get', async (req, res) => {
    const id = req.user.id;
    if (id !== undefined) {
        const favs = await favoriteQueries.getFavorites(id);
        res.status(200).json(favs)
    }
    else {
        res.status(400).json("Could not find user favorites");
    }
});

router.post('/user/add', async (req, res) => {
    const id = req.user.id;
    const body = req.body;
    if (body !== undefined) {
        const favs = await favoriteQueries.addFavorites(id, body)
        res.status(200).json(favs);
    }
    else {
        res.status(400).json("Could not find user favorites");
    }
});

router.delete('/delete/:postID', async (req, res) => {
    const postID = req.params.postID;
    if (postID !== undefined) {
        const favs = await favoriteQueries.deleteFavorite(postID)
        res.status(200).json({ message: "succesfully deleted" });
    }
    else {
        res.status(400).json("Could not find user favorites");
    }
});

export default router