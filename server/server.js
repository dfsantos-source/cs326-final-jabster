import cart from './routes/cart'
import favorites from './routes/favorites'
import posts from './routes/posts'
import users from './routes/users'

const express = require('express')
const app = express()
const port = 3000
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

module.exports(router)