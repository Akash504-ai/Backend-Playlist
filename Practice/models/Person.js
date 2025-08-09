const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {  
    type: String,
    required: true
  },
  address: {
    type: String, 
    required: true
  }
})

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person