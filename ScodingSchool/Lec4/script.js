//Express -> it is a npm package (framework)
//-manage everything from receiving the request and giving the respinse

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
import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log("middlewire started..........");
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World..........')
})

//----------Error Handling----------//
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)                   