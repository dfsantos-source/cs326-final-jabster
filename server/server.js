import 'dotenv/config';
import cart from './routes/cart.js'
import favorites from './routes/favorites.js'
import posts from './routes/posts.js'
import users from './routes/users.js'
import express from 'express'
import client from './db/db.js'
import { registerUser } from './db/users-db.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import expressSession from 'express-session';
import auth from './auth.js';
import logger from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

const sessionConfig = {
  // set this encryption key in Heroku config (never in GitHub)!
  secret: process.env.SECRET || 'SECRET',
  resave: false,
  saveUninitialized: false,
};

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(expressSession(sessionConfig));
app.use(logger('dev'));
auth.configure(app);

app.use('/client', express.static('client'));
app.use('/posts', posts);
app.use('/user', users);
app.use('/user/favorites', favorites);
app.use('/user/cart', cart);

// user routes
// Our own middleware to check if the user is authenticated
function checkLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // If we are authenticated, run the next route.
    next();
  } else {
    // Otherwise, redirect to the login page.
    res.redirect('/login');
  }
}

app.get('/', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/grubify.html')
});

// Handle the URL /login (just output the login.html file).
app.get('/login', (req, res) =>
  res.redirect('/client/html/login.html')
  // res.sendFile('client/html/login.html', { root: __dirname })
);

app.get('/all-posts', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/posts.html')
})

app.get('/my-posts', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/my-posts.html')
})

app.get('/create-post', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/create-post.html')
})

app.get('/profile', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/user-profile.html')
})

// Handle the URL /login (just output the login.html file).
app.get('/homepage', checkLoggedIn, (req, res) =>
  res.redirect('/client/html/grubify.html')
  // res.sendFile('client/html/grubify.html', { root: __dirname })
);

app.get('/home', checkLoggedIn, (req, res) => {
  res.redirect('/client/html/index.html')
})

// Handle post data from the login.html form.
app.post(
  '/login',
  auth.authenticate('local', {
    // use username/password authentication
    successRedirect: '/homepage', // when we login, go to /private
    failureRedirect: '/login', // otherwise, back to login
  })
);

// Handle logging out (takes us back to the login page).
app.get('/logout', (req, res) => {
  req.logout(); // Logs us out!
  res.redirect('/login'); // back to login
});


// Register URL
app.get('/register', (req, res) =>
  res.redirect('/client/html/register.html')
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})