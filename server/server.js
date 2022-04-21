import cart from './routes/cart.js'
import favorites from './routes/favorites.js'
import posts from './routes/posts.js'
import users from './routes/users.js'
import express from 'express'

const app = express()
const port = process.env.PORT || 30000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/client', express.static('client'));
app.use('/posts', posts)
app.use('/user', users)
app.use('/user/favorites', favorites)
app.use('/user/cart', cart)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})