# Social Network API

![Github license](http://img.shields.io/badge/license-MIT-blue.svg)

Built a Social Network API using `Mongoose` to set up the database and `Insomnia` to test the api routes. This application utilizes NoSQL MongoDB.

## Table of Contents

* [Setup](#setup)
* [Usage](#usage)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

## Setup
:floppy_disk:

The database uses the following npm:
- [Node Package Manager](https://nodejs.org/en/)
  - Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`.
  - This will also help install express on your system and manage any other dependencies in your script.
- [Express](https://www.npmjs.com/package/express)
  - A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. Facilitates the rapid development of Node based Web applications.
- [Mongoose](https://www.npmjs.com/package/mongoose)
  - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

This repository requires [Insomnia Core](https://insomnia.rest/products/insomnia) to be utilized.

## Usage

:computer:

After installing all the necessary dependencies, start the server by typing `npm start`.

Use Insomnia to test the api routes. Use the following api routes to test your data. Use `http://localhost:3001/...` for the Insomnia address.



User Routes:

- `/api/users`
- `/api/users/:id`

User Inputs:

- GET all Users
- GET Users by ID
- POST User
- PUT User
- DEL User.

See the following gif for a walkthrough of User routes:

![user_path](./assets/gifs/social_network_users_path.gif)

Friend Routes:

- `/api/users/:userId/friends`
- `/api/users/:userId/friends/:friendId`

Friend Inputs:

- POST friends
- DEL friends

![friend_path]

Thought Routes:

- `/api/thoughts/`
- `/api/thoughts/<thoughtId>`

Thought Inputs:

- 

See the following 


- `/api/thoughts/<thoughtId>/reactions`
- `/api/thoughts/<thoughtId>/reactions/<reactionId>`

## Deployment

There is no deployment for this repository.

## Contributing

:octocat:

[paperpatch](https://github.com/paperpatch) </br>

## License

:receipt:

This project is licensed under MIT.