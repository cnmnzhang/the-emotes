# The Emotes
Working to create a journaling and self-care website and app that includes an anonymous, community-based forum and a user-specific, personalized space for self-expression and feedback. This application is being built using the MERN stack with a client front-end and a server back-end. 

## Installing / Getting started
[Node.js](https://nodejs.org/en/download/) is required. Other used tools are MongoDB and Heroku along with node packages, which are listed in `server/package.json` and `client/package.json`. They will be installed when running the installation processes above.
To run the app locally, follow the instructions below.

### Backend

Navigate to the `server` directory. Create a `config.env` file with the necessary environment variables (`MONGODB_PASSWORD`, and `PORT`) and run the following commands to start the backend server:

```shell
$ npm install
$ npm start
```

### Frontend

In a new terminal session, navigate to the `client/` directory. Run the following commands to start the frontend application:

```shell
$ npm install
$ npm start
```

Before a developer has ever deployed, they should cd to the top of the repo and run:
```shell
$ heroku login
$ heroku git:remote -a the-emotes
$ heroku git:remote -a the-emotes-api
```
After doing above one time, they can always deploy with:

```shell
$ git subtree push --prefix client the-emotes main
$ git subtree push --prefix server the-emotes-api main
```
