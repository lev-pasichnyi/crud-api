// use monk for mongoDB connection
import monk from 'monk'

// create DB with name "crud"
const db = monk('localhost:27017/crud')

// check connection to db
db.then(() => {
    console.log('Connected correctly to db')
  })

export const staff = db.get('staff')
