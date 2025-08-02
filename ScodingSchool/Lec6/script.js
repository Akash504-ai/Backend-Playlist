//initilize a project with npm --->  npm init  
//express install ---> npm i express

//dynamic routong
    //dynamic routong
    //how to get data coming from frontend at backend route

//---setting up parsers for form

//---setting up ejs for ejs pages
//(it has some dynamic powers to perform some tasks)
//(npm i ejs) [install ejs from npm]
//[setup ejs as view engine]

//---setting up public static files

//run any code using ---> npx nodemon filename

//code--->

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// these 2 lines are "parsers"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); // Make sure views/index.ejs exists
});

//if u want to make it dynamic to realise karo lonsa part dynamic hai aur us part ke aage route main ':' laga do
app.get('/profile/:username', (req, res) => {
  // req.params.username;
  // res.send('its running');
  res.send(`it is running ${req.params.username}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
