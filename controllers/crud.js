// import staff collection from Mongo and schema with validation
import { staff } from '../db.js'
import schema from '../model/person.js'

export const getAll = async (req, res, next) => {
    try {
      const items = await staff.find({});
      res.json(items);
    } catch (error) {
      next(error);
    }
  };

export const getOne = async (req, res, next) => {
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
}

export const createOne = async (req, res, next) => {
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
}

export const updateOne = async (req, res, next) => {
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
}

export const deleteOne = async (req, res, next) => {
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
}

export default {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
