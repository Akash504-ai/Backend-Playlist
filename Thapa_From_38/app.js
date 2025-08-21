import express from 'express';
import { PORT } from './env.js';

const app = express()
// const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

// console.log(process);

app.listen(PORT, () => {
  console.log(`Surver is running on port ${PORT}`)
})