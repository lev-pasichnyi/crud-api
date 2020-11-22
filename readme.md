# Simple api, based on CRUD operations:


* GET api/ - get all objects in collection
* GET api/:id - get an object by ID from mongoDB collection
* POST api/ + body (see down below) - create new object in MongoDB with validation and data model (crud.js)
* PUT api/:id - change whole DB object with given ID number
* PATCH api/:id -  add information for the DB object with given ID number
* DELETE api/:id - delete object from DB by ID number
 
## Install and start http server
`npm install && npm start`

#### Example JSON code for API testing:

```
{
  "firstName": "Lev",
  "lastName": "Pasichnyi",
  "login": "Cool - password",
	"workPhone" : "0508564589",
	"workEmail" : "xxx@gmail.com",
	"role": "engineer",
	"hourlyRate": "15.0"
}

```
#### Expected response on up above POST request

```
{
  "firstName": "Lev",
  "lastName": "Pasichnyi",
  "login": "Cool - password",
  "workPhone": 508564589,
  "workEmail": "xxx@gmail.com",
  "role": "engineer",
  "hourlyRate": 15,
  "_id": "5fba60271cab6c202ce7a6c9"
}

```

## Built with

* [Node.js](https://nodejs.org/) - Runtime engine for JS
* [MongoDB](www.mongodb.com) - NoSQL, wide known cloud database with good scale capabilities
* [Express](https://expressjs.com/) - fast web framework for Node.js
* [Monk](https://www.npmjs.com/package/monk) - Provides usability improvements for MongoDB usage within Node.JS
* [Insomnia](https://insomnia.rest/) - Tools to make API Development Easier
