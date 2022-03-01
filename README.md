# The Emotes
Working to create a journaling and self-care website and app that includes an anonymous, community-based forum and a user-specific, personalized space for self-expression and feedback

**Team**

| Name                   | JHU Email           | GitHub Username |
| ---------------------- | ------------------- | --------------- |
| Stella Hong            | shong62@jhu.edu     | stellahong0128  |
| Rachel Xu              | rxu32@jhu.edu       |                 |
| Katie Zhang            | kzhang70@jhu.edu    | lightcereal     |
| Cindy Zhang            | czhan117@jhu.edu    | czhan117        |


## Deployments
* App: [https://jhu-bonsai.herokuapp.com/](https://jhu-bonsai.herokuapp.com/)
* API: [https://jhu-bonsai-api.herokuapp.com/](https://jhu-bonsai-api.herokuapp.com/)

## Documentation
coming soon!
<!-- * [Project Document](https://docs.google.com/document/d/1zt9AIEC30VXZO0WcSJViF-G2vsBK9pgd8TKFH6jKv1s)
* [User Manual](https://cs421sp22-homework.github.io/team-11-spontaneous-bonsai/)
* [API Documentation](https://cs421sp22-homework.github.io/team-11-spontaneous-bonsai/) -->

## Installing / Getting started

To run the app locally, follow the instructions below.

### Backend

coming soon!
Navigate to the `code/backend` directory. Create a `.env` file with the necessary environment variables (`MONGODB_PASSWORD`, and `PORT`) and run the following commands to start the backend server:

```shell
$ npm install
$ npm start
```

### Frontend

In a new terminal session, navigate to the `code/frontend/` directory. Create a `.env` file with the necessary environment variables (`REACT_APP_API_URL` = [url where you locally deployed the backend]). Run the following commands to start the frontend application:

```shell
$ npm install
$ npm start
```

## Developing

### Tools 
* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/)
* [Heroku](https://www.heroku.com/home)
* [VSCode](https://code.visualstudio.com/Download)

Other tools are node packages, which are listed in `code/backend/package.json` and `code/frontend/package.json`. They will be installed when running the installation processes above

### Code Style/Formatting 
Run [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) in `code/frontend` or `code/backend` with the following:

```shell
$ npm run lint
$ npm run pretty
```

### Testing 
coming soon!
