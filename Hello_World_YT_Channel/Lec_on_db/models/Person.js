const mongoose = require('mongoose');
const { use } = require('passport');
const bcrypt = require('bcrypt');

// Define person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'], // Example of enum for work types
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

personSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

personSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(err);
  }
}; 

// Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
