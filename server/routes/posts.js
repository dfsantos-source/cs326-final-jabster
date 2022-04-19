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
        img: faker.image.food(),
        tags: [],
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
        img: faker.image.food(640, 480, true),
        tags: [],
        user_id: faker.random.number({'max':100}),
        cuisine: 'Italian',
        likes: faker.random.number({'max':100}),
        dislikes: faker.random.number({'max':100}),
        description: 'Look at this amazing alfredo.',
        directions: [
            'In a pan over medium-high heat, melt butter, then add the chicken breast.',
            'Season with salt, pepper, oregano, and basil. Cook 8-10 minutes or until chicken is fully cooked. Remove from heat and set chicken aside.',
            'In the same pan over medium heat, melt butter and add the garlic. Cook until the garlic begins to soften.',
            'Add half of the flour to the garlic and butter, stirring until incorporated. Then add the rest of the flour and stir.',
            'Pour in the milk a little bit at a time, stirring well in between, until fully incorporated and sauce begins to thicken.',
            'Season with salt, pepper, oregano, and basil, and stir well to incorporate.',
            'Add parmesan cheese and stir until melted.',
            'Pour the sauce over cooked penne pasta, add the chicken and mix well.',
            'Add parsley and extra parmesan. Mix well.',
            'Enjoy!'
        ],
        ingredients:
            ['1 ½ lb chicken breast, cubed',
            '2 tablespoons butter',
            '½ teaspoon dried oregano',
            '½ teaspoon dried basil',
            '½ teaspoon salt',
            '½ teaspoon pepper',
            '16 oz penne pasta, cooked',
            '¼ cup fresh parsley',
            '¼ cup shredded parmesan cheese',
            '2 tablespoons butter',
            '4 cloves garlic, minced',
            '3 tablespoons flour',
            '2 cups milk',
            '½ teaspoon dried oregano',
            '½ teaspoon dried basil',
            '½ cup shredded parmesan cheese',
            '½ teaspoon salt',
            '½ teaspoon pepper']
    }
    const post2 = {
        id: faker.random.number({'max':100}),
        name: 'Spaghetti',
        img: faker.image.food(640, 480, true),
        tags: [],
        user_id: faker.random.number({'max':100}),
        cuisine: 'Italian',
        likes: faker.random.number({'max':100}),
        dislikes: faker.random.number({'max':100}),
        description: 'Look at this amazing spaghetti.',
        directions: [
            'In a pan over medium-high heat, melt butter, then add the chicken breast.',
            'Season with salt, pepper, oregano, and basil. Cook 8-10 minutes or until chicken is fully cooked. Remove from heat and set chicken aside.',
            'In the same pan over medium heat, melt butter and add the garlic. Cook until the garlic begins to soften.',
            'Add half of the flour to the garlic and butter, stirring until incorporated. Then add the rest of the flour and stir.',
            'Pour in the milk a little bit at a time, stirring well in between, until fully incorporated and sauce begins to thicken.',
            'Season with salt, pepper, oregano, and basil, and stir well to incorporate.',
            'Add parmesan cheese and stir until melted.',
            'Pour the sauce over cooked penne pasta, add the chicken and mix well.',
            'Add parsley and extra parmesan. Mix well.',
            'Enjoy!'
        ],
        ingredients:
            ['1 ½ lb chicken breast, cubed',
            '2 tablespoons butter',
            '½ teaspoon dried oregano',
            '½ teaspoon dried basil',
            '½ teaspoon salt',
            '½ teaspoon pepper',
            '16 oz penne pasta, cooked',
            '¼ cup fresh parsley',
            '¼ cup shredded parmesan cheese',
            '2 tablespoons butter',
            '4 cloves garlic, minced',
            '3 tablespoons flour',
            '2 cups milk',
            '½ teaspoon dried oregano',
            '½ teaspoon dried basil',
            '½ cup shredded parmesan cheese',
            '½ teaspoon salt',
            '½ teaspoon pepper']
    }
    try {
        res.json([post1, post2])
    }
    catch {
        res.status(404).json({ err: 'Error reading all post' });
    }
})

export default router
