# Social Network API

![Github license](http://img.shields.io/badge/license-MIT-blue.svg)

Built a Social Network API using `Mongoose` to set up the database and `Insomnia` to test the api routes. This application utilizes NoSQL MongoDB.

![Screenshot](./public/images/screenshots/trackend-login.png)
![Screenshot](./public/images/screenshots/trackend-home.png)
![Screenshot](./public/images/screenshots/trackend-all.png)
![Screenshot](./public/images/screenshots/trackend-ticket-detail.png)

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
- `/api/users/:userId/friends`
- `/api/users/:userId/friends/:friendId`

See the following gif for a walkthrough of:
- User GET
- Get users by ID
- CREATE user
- UPDATE user
- DELETE user.



## Deployment

There is no deployment for this repository.

## Contributing

:octocat:

[paperpatch](https://github.com/paperpatch) </br>

## License

:receipt:

This project is licensed under MIT.