const mongoose = require('mongoose');
require("dotenv").config(); // Load environment variables from .env file

//define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //replace 'mydatabase' with yout database name

// const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/hotels'; // Use the URL from .env or default to local MongoDB

//set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

//defune evernListner
db.on('connected', () => {
  console.log('Connected to MongoDB server');
})

db.on('error', (err) => {
  console.error('MongoDB connection error : ',err);
})

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
})

//Export the database connection
module.exports = db