// use express for request handling and routing
import express from 'express'
const crudRouter = express.Router()

// import Crud controller
import crud from '../controllers/crud.js'

// get all objects in db table
crudRouter.get('/', crud.getAll)

// read one object by id
crudRouter.get('/:id', crud.getOne)

// use bodyParser for body JSON parsing
import bodyParser from 'body-parser'
const jsonParser = bodyParser.json()

// create an object following schema with validation 
crudRouter.post('/', jsonParser, crud.createOne)

// update whole object in db by it's id number
crudRouter.put('/:id', jsonParser, crud.updateOne)

// delete an object from db by ID number
crudRouter.delete('/:id', crud.deleteOne)

export default crudRouter