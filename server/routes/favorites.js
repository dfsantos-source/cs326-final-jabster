import express from 'express'
import { faker } from '@faker-js/faker';

const router = express.Router()

//put endpoints here
//ex. router.get router.put 

router.get('/:userID/get', (req, res) => {
    const id = req.params.userID;
    if (id !== undefined) {
        const favorites = [
            {
                id: faker.random.number({'max':100}),
                name: 'Alfredo',
                user_id: id,
                cuisine: 'Italian',
                likes: faker.random.number({'max':100}),
                dislikes: faker.random.number({'max':100}),
                description: 'Look at this amazing alfredo.',
                directions: '1 boil water, 2 add sauce, bake in oven for 300 degrees 30 min',
                ingredients: [`{id: 1, name: 'Peas', amount:'1 bag', post_id:2}, {id: 3, name: 'Corn', amount:'1 can', post_id:2}}`]
            },
            {
                id: faker.random.number({'max':100}),
                name: 'Spaghetti',
                user_id: id,
                cuisine: 'Italian',
                likes: faker.random.number({'max':100}),
                dislikes: faker.random.number({'max':100}),
                description: 'Look at this amazing spaghetti.',
                directions: '1 boil water, 2 add sauce, add meatballs, serve',
                ingredients: [`{id: 1, name: 'Peas', amount:'1 bag', post_id:2}, {id: 3, name: 'Corn', amount:'1 can', post_id:2}}`]
            }
        ];
        res.status(200).json(favorites);
    }
    else {
        res.status(400).json("Could not find user favorites");
    }
});

router.post('/:userID/add', (req, res) => {
    const id = req.params.userID;
    const body = req.body;
    console.log(body);
    if (id !== undefined && body !== undefined) {
        res.status(200).json({ message: "Successfully added post to favorites!", "post": body });
    }
    else {
        res.status(400).json("Could not find user favorites");
    }
});

router.delete('/:userID/delete/:postID', (req, res) => {
    const userID = req.params.userID;
    const postID = req.params.postID;
    if(userID !== undefined && postID !== undefined){
        res.status(200).json({ message: "Successfully deleted post from favorites!", "post": postID});
    }
    else{
        res.status(400).json("Could not find user favorites");
    }
});

export default router