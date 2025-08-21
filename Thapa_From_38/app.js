const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

// console.log(process);

app.listen(port, () => {
  console.log(`Surver is running on port ${port}`)
})