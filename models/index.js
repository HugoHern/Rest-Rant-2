require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
console.log('connecting mongoose')
module.exports.Place = require('./places')
module.exports.Comment = require('./comment')