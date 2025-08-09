const mongoose = require('mongoose')
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  taste: {
    type: String,
    enum: ['spicy', 'sweet', 'sour', 'bitter', 'salty'],
    required: true
  }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)
module.exports = MenuItem