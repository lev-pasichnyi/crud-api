// use express for request handling and routing
import express from 'express'
const crudRouter = express.Router()

// use bodyParser for JSON parsing
import bodyParser from 'body-parser'
const jsonParser = bodyParser.json()

// import schema from model
import schema from '../model/person.js'

// use monk for mongoDB connection
import monk from 'monk'

// create DB with name "crud"
const db = monk('localhost:27017/crud')

// check connection to db
db.then(() => {
    console.log('Connected correctly to db')
  })

// create table with name "staff"
const staff = db.get('staff')

// get all objects in db table
crudRouter.get('/', async (req, res, next) => {
    try {
        const items = await staff.find({})
        res.json(items)
    } catch (error) {
        next(error)
    }
})

// read one object by id
crudRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const item = await staff.findOne({
            _id: id
        })
        if(!item) return next()
        return res.json(item)
    } catch (error) {
        next(error)
    }
})

// create an object following schema with validation 
crudRouter.post('/', jsonParser, async (req, res, next) => {
    try {
        // validate incoming data
        const value = await schema.validateAsync(req.body)

        // and insert JSON object into it
        const inserted = await staff.insert(value)
        
        // response in JSON format
        res.json(inserted)
    } catch (error) {
        next(error)
    }
})

// update whole object in db by it's id number
crudRouter.put('/:id', jsonParser, async (req, res, next) => {
    try {
        // take out id from params
        const { id } = req.params
        
        // validate the body
        const value = await schema.validateAsync(req.body)
        
        // update data for our id number
        const item = await staff.update({
            _id: id
        }, {
            $set: value
        })

        // if item doesn't exist go out
        if(!item) return next()

        // return updated item
        return res.json(item)
    } catch (error) {
        next(error)
    }
})

// delete an object from db by ID number
crudRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        await staff.remove({ _id: id })
        res.json({
             message: 'Item was deleted successfully'
          })
    } catch(error) {
        // go to the error handler
        next(error)
    }
})

export default crudRouter