//Express -> it is a npm package (framework)
//-manage everything from receiving the request and giving the respondses

//-----------Express-----------//
// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/profile', (req, res) => {
//   res.send('Hello Akash')
// })

// app.listen(3000) 


//---------Middlewire---------//
//Middleware is like a security guard or helper that checks, modifies, or handles things before the final action is taken.

import express from 'express'

const app = express()

app.use((req, res, next) => {  //app.use() is used to define middleware.
  console.log("middlewire started..........");
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World..........')
})


//----------Error Handling----------//
//This special type of middleware is only used when an error occurs.
app.use((err, req, res, next) => {  //it has 4 parameters: (err, req, res, next) — this tells Express it's for error handling.
  res.status(500).send('Something broke!')
})

app.listen(3000)                   