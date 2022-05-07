#Title: Team 10 Jabster

#Subtitle: Guess my Grub
#Semester: Spring 2022
#Overview: 
Our app is a social media app about Food Recipes. Users are able to make posts about recipes that they know or have made and share them on our web app. The main feature of the app is that users can get a random recipe based on the tags and cuisine they select. This can users decide what to eat or cook when they are having trouble picking food to eat. There are a lot of Recipe Websites out there, but there aren't many that are social media sites that allows users to get random meals based on tags and cuisine and allows them to save their favorites and shopping cart, which makes our app innovative.

#Team Members: 
 Aayush Bhagat (Github: Aayush-Bhagat)  
 Dane Santos (Github: dfsantos-source)  
 Ali Rabeea (Github: alirabeea)  
 Nolan LaRochelle (Github: LaRochelleNolan)  

#User Interface: 

###Homepage
**A view of what the website is about and the mission**
![Homepage](images/final-ui/home.png)

###Grubify
**A view where the user can select the a tag and cuisine and get a random recipe based on the filters**
![Grubify](images/final-ui/grubify.png)

###Posts 
**A view where the a user can see all of the Recipe Posts that users make**
![Posts](images/final-ui/posts.png)

###My-Posts
**A view where the user can see aall of the recipe posts that you have made**
![my-posts](images/final-ui/my-posts.png)

###Create Post
**A view where the user can create their own recipe post**
![create-post](images/final-ui//create-post.png)

###Update Post 
**A view where the user can update a post that they have made**
![updte-post](images/final-ui//update-post.png)

###Login
**A view where the user can login into their account**
![login](images/final-ui/login.png)

###Register
**A view where a user can register an account for the app**
![Register](images/final-ui/register.png)

#APIs:
 A final up-to-date list/table describing your application’s API

#Database: 

###Users table
Table to keep user data
| Column   | Data Type | Description                         |
| -------- | --------- | ----------------------------------- |
| id       | Integer   | id for users  (Primary Key)         |
| username | String    | the username for the user (UNIQUE)  |
| name     | String    | the users name                      |
| password | String    | THe password the user uses to login |

###Recipe_Posts
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

###User_Favorites
Table to keep all of the recipe posts a User has favorited
| Column | Data Type | Description                          |
| ------ | --------- | ------------------------------------ |
| id     | Integer   | id for User_Favorites  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id              |
| postId | Integer   | Foreign Key Ref Recipe_Posst id      |

###Cart_Item
Table to keep the items the user needs in a shopping cart
| Column | Data Type | Description                              |
| ------ | --------- | ---------------------------------------- |
| id     | Integer   | id for Cart_Item  (Primary Key)          |
| userId | Integer   | Foreign Key Ref User id                  |
| name   | String    | name of the ingredient for shopping cart |
| amount | String    | amount of the ingredient the user needs  |

###User_Likes
Table to keep all of 
| Column | Data Type | Description                      |
| ------ | --------- | -------------------------------- |
| id     | Integer   | id for User_Likes  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id          |
| postId | String    | Foreign Key Ref Recipe_Post id   |

###User_Disikes
Table to keep all of the recipe posts a User has favorited
| Column | Data Type | Description                         |
| ------ | --------- | ----------------------------------- |
| id     | Integer   | id for User_Dislikes  (Primary Key) |
| userId | Integer   | Foreign Key Ref User id             |
| postId | String    | Foreign Key Ref Recipe_Post id      |

#URL Routes/Mappings: 
| Route        | Authenticated | view              | Description                                                                                                                             |
| ------------ | ------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| /home        | yes           | hompage view      | Used to route the user to the hompage                                                                                                   |
| /            | yes           | grubify view      | Used to route the user to the grubify page sso they can get random recipes                                                              |
| /login       | no            | login view        | Used to route user to the login page so they can login to the app                                                                       |
| /register    | no            | register view     | Used to route users the register page so users can register an account for the app                                                      |  |
| /all-posts   | yes           | posts view        | route the users to the posts page so that users can see all the recipe posts users have created                                         |
| /my-posts    | yes           | my posts view     | Used to  route users to the my posts page  so user can look at their posts and perform CRUD operations on their posts                   |
| /create-post | yes           | create post view  | Used to route users to the create post view so that users can create their own recipe posts                                             |
| /profile     | yes           | user profile view | used to route users to the user profile view so that users can see theri user info and also see their favorites and their shopping cart |


#Authentication/Authorization: 
Users are authenticated through Passport js. 
To register a user needs to enter: 
``` 
username: String (Unique),
password: String
name: String
email: string
 ```

 To Login a user needs to enter:
 ```
 username: String, 
 password: String
 ```
 And if the credentials match that of the database they will be logged in.

 The user will need to be logged in to access any of the web app besides register and login. Which means that every route (besides login and register) will check if the user is logged in and redirect them to the login page if they are not.

 All users will have the same permissions and no user will have any special permissions.

# Division of Labor: 

#### Aayush Bhagat: 
#### Dane Santos:
#### Ali Rabeea:
#### Nolan LaRochelle:

# Conclusion: 
Our team has really enjoyed creating this web app throughout the semester, we have enjoyed working as a team together and really liked the project we created. We have learned a lot through implementing and designing this app. We learned a lot about creating our own api and how to design a larger scale api that makes it easy to call endpoints in the frontend. We also learned a lot about SQL through making this app, as we learned how relations work in SQL tables and wee learned SQL queries that allows us to read, update, create , and delete data from the database, we also lerned how to use joins in SQL. The biggest difficulty that we had with this projecct is integrating the front end and backend together. There were a lot of small parts in our application that we needed to integrate such as user likes, that took a while as we would get bugs and didn't know if it was a backend or frontend problem. Our team would have liked to know SQL queries before we began this project, as we had a lot of bugs from our SQL queries when we were setting up the database and also testing the database.