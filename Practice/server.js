const express = require('express')
const app = express()
const db = require('./db')
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const Person = require('./models/Person')
const MenuItem = require('./models/MenuItem')

app.get('/', (req, res) => {
  res.send('Hello World!.........This is the server.js file')
})

app.post('/MenuItem', async(req, res) => 
{
  try {
    const menuItem = await MenuItem.insertMany(req.body)
    // await menuItem.save()
    res.status(201).send(menuItem)
  } catch (error) {
    res.status(400).send(error)
  } 
})

app.get('/MenuItem', async (req, res) => {
  try {
    const menuItems = await MenuItem.find()
    res.status(200).send(menuItems)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.post('/Person', async (req, res) => {
  try {
    const person = await Person.insertMany(req.body)
    // await person.save()
    res.status(201).send(person)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.get('/Person', async (req, res) => {
  try {
    const people = await Person.find()
    res.status(200).send(people)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
