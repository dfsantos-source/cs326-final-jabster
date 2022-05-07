# Setup
First you want to clone the repository to your local machine. You can do this by running:
```
$ git clone https://github.com/dfsantos-source/cs326-final-jabster

```
## Installing Dependencies
Afterwards, navigate into the project folder that you just cloned and run this command to install dependencies:
```
$ npm install

```
This will install any dependencies defined in `package.lock.json` and sets up the application to be run.


## Start the App
This command will start the Node.js server and get it running on `localhost` locally, where the app can be run.
```
$ npm start

```

## Deployment
This application is also structured and ready to deploy on Heroku, instead of your local machine.
To do this, (assuming you already have a Heroku account setup) you can do the following:

```
$ npm run deploy
$ cd deploy
$ git init
$ git add .
$ git commit -m "Deploying to Heroku"
$ heroku login
$ heroku create <name>
$ heroku git:remote -a <heroku-app>
$ heroku addons:add -a <heroku-app> heroku-postgresql:hobby-dev
```

From here we need to grab the credentials from our database on heroku and link it to the application. Run this command to grab credentials:
```
$ heroku pg:credentials:url

```

Then copy this credential into a .env file which will be used to connect to the database. Example:

```
DATABASE_URL = postgres://UUUUUUUUUUU:PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP@ec2-3-229-252-6.compute-1.amazonaws.com:5432/d39m84tf0ubgio

```

From here we can now push to the heroku app and deploy it. 
```
$ git add .                         
$ git commit -am 'added pg creds'   
$ git push heroku main          
```

To open it the heroku app we just deployed we can run:
```
$ heroku open
```