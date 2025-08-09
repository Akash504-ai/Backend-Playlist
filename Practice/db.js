const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/Hotel'

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
  console.log('Connected to MongoDB')
})

db.on('error', (error) => {
  console.error('MongoDB connection error:', error)
})

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB')
})

module.exports = db