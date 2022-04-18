import cart from './routes/cart.js'
import favorites from './routes/favorites.js'
import posts from './routes/posts.js'
import users from './routes/users.js'
import express from 'express'

const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = express.Router()

app.use('/posts', posts)
app.use('/user', users)
app.use('/user/:userId/favorites', favorites)
app.use('/user/:userId/cart', cart)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})