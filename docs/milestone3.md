# Database Schema

### Users table
Table to keep user data
| Column   | Data Type | Description                         |
| -------- | --------- | ----------------------------------- |
| id       | Integer   | id for users  (Primary Key)         |
| username | String    | the username for the user (UNIQUE)  |
| name     | String    | the users name                      |
| password | String    | THe password the user uses to login |

### Recipe_Posts
Table to keep the Recipes that users create
| Column      | Data Type | Description                                 |
| ----------- | --------- | ------------------------------------------- |
| id          | Integer   | id for Recipe_Posts  (Primary Key)          |
| name        | String    | The name of the recipe                      |
| userID      | Integer   | Foreign Key Ref User id                     |
| Cuisine     | String    | name of the cuisine type of the dish        |
| likes       | Integer   | number of likes the post has                |
| dislikes    | Integer   | number of dislikes the post has             |
| description | String    | description of the dish                     |
| directions  | String    | number of likes the post has                |
| image       | String    | Base 64 String of image data                |
| ingredients | String    | String of all the ingredients               |
| tag         | String    | tag associated with recipe ex: vegan, halal |

### User_Favorites
Table to keep all of the recipe posts a User has favorited
| Column | Data Type | Description                          |
| ------ | --------- | ------------------------------------ |
| id     | Integer   | id for User_Favorites  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id              |
| postId | Integer   | Foreign Key Ref Recipe_Posst id      |

### Cart_Item
Table to keep the items the user needs in a shopping cart
| Column | Data Type | Description                              |
| ------ | --------- | ---------------------------------------- |
| id     | Integer   | id for Cart_Item  (Primary Key)          |
| userId | Integer   | Foreign Key Ref User id                  |
| name   | String    | name of the ingredient for shopping cart |
| amount | String    | amount of the ingredient the user needs  |

### User_Likes
Table to keep all of 
| Column | Data Type | Description                      |
| ------ | --------- | -------------------------------- |
| id     | Integer   | id for User_Likes  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id          |
| postId | String    | Foreign Key Ref Recipe_Post id   |

### User_Disikes
Table to keep all of the recipe posts a User has favorited
| Column | Data Type | Description                         |
| ------ | --------- | ----------------------------------- |
| id     | Integer   | id for User_Dislikes  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id             |
| postId | String    | Foreign Key Ref Recipe_Post id      |

# Division of Labor

#### Aayush Bhagat: 
 Created and intialized database with express backend, user favorites SQL queries and endpoints, User Authentication with Passportjs with Dane, Fixed server bugs, Fixed user profile page integration with backend with Dane.
#### Dane Santos:
Iitialized database with tables and schema, user shopping cart item Sql queries and endpoints, User Authentication with Passportjs with Aayush, Fixed server bugs, Fixed user profile page integration with backend with Aayush, implemented image base 64 processing.
#### Ali Rabeea:
 User register query database, tested backend endpoints with SQL queries and fixed any bugs with queries. Implemented create post, posts, my posts, and update posts page integration with server.
#### Nolan LaRochelle:
Implemented Recipe post SQL queries and recipe post backend endpoints, fixed and tested post queries and endpoints, implmented and fixed integration to backend for grubify and register pages. 
