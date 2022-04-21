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
                id: faker.random.number({ 'max': 100 }),
                name: 'Alfredo',
                img: faker.image.food(640, 480, true),
                tags: [],
                user_id: req.params.userId,
                cuisine: 'Italian',
                likes: faker.random.number({ 'max': 100 }),
                dislikes: faker.random.number({ 'max': 100 }),
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
            },
            {
                id: faker.random.number({ 'max': 100 }),
                name: 'Spaghetti',
                img: faker.image.food(640, 480, true),
                tags: [],
                user_id: req.params.userId,
                cuisine: 'Italian',
                likes: faker.random.number({ 'max': 100 }),
                dislikes: faker.random.number({ 'max': 100 }),
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