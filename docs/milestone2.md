
## API

#### Database Schema
![Database][./images/schema.png]
#### Posts Endpoints

- POST create a post (/posts/create): Allows a user to create a new Recipe post  
    Request Body : {  
        name: String
        user_id: number  
        cusine: String  
        description: String  
        directions: String  
        ingredients: String  
    }  

- PUT update a post (/posts/update/:postId): Allows User to update their own posts  
    Params:  
        Request Body: {  
            name: String
            cusine: String  
            description: String  
            directions: String  
            ingredients: String  
        }  
  
- DELETE a post (/posts/delete/:postId): Allows a user to delete one of their posts  
    Paramss: Post_id  

- GET read all posts (/posts/get/all): Returns all of the posts from the database so the user can see all posts


- GET a specific post (/posts/get/:postId): Returns the posts objct for the specific post  
Params:
    post_id: number 

- GET read a random post (/posts/get/random): Returns a random post from the database  

- PUT like a certain dish (/posts/postId/like): Allows a user to like a post
Params: 
    post_id: number  


- PUT dislike a certain dish (/posts/postId/dislike): Allows a user to dislike a post  
Params:  
    post_id: number  


#### Users Endpoints

- POST login (user/login): Allows a user to login into the web app  
    Request Body {  
        email: String  
        password: String  
    }  
- GET Get user data (user/:id): Gets a specific user's data

- PUT update user data (user/update/:id): Allows a useer to updaate their credentials  
Request Body: {  
    email: String  
    name: String  
    password: String  
}  

- POST register (user/register): Allows a user to register an account for thee web app  
Request Body: {  
    email: String  
    name: String  
    password: String  
}  

#### User Favorites Endpoint
- GET read users favorrite dishes (user/favorites/:userId/get) Gets a user's favortie dishes  
Params:  
user_id: number    


- POST add favorite dish (user/favorites/:userId/add): Allows a user to add a dish to their favorites list   
Params:  
    user_id: number   


- DELETE favorite dish (user/favorites/:userId/delete/:id): Allos a user to remove a dish from their favorites list  
Params:   
    user_id: number  
    post_id: number  

#### User Cart Endpoints
- GET read a cart (user/cart/:userId/get): Allows a user to get the ingredients in their shopping list  
Params:  
    user_id: number  


- POST create an item and add to User cart (user/cart/:userId/add): Allows a user to add an ingredient to their shopping list
Params:  
    user_id: number  


- DELETE item from cart (user/cart/:userId/delete/:cartId): Allows a user to delete an ingredient from their shopping list  
Params:  
    user_id: number  
    cartId: number  

