const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config(); // Load environment variables from .env file
const port = 3000;
const passport = require("./auth"); // Import the passport configuration

const bodyPerser = require("body-parser");
app.use(bodyPerser.json());
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

//body-parser is a middleware (special function in Express) that reads the body of incoming HTTP requests.

// Without it, your server wouldn’t automatically understand JSON data sent from Postman or any client.

// body-parser is like a translator for your server.
// When Postman sends some JSON data to your server, it arrives as raw text.
// body-parser translates that raw text into a normal JavaScript object so you can use it directly with req.body.

//middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] - ${req.method} request to ${req.url}`);
  next(); // Call the next middleware or route handler
}

app.use(logRequest); // Use the middleware function

app.use(passport.initialize()); 

const localAuthMiddleware = passport.authenticate('local', {session:false})

app.get("/" , (req, res) => {
  res.send("Hello World!.....This is my world"); 
});

app.get("/profile", (req, res) => {
  res.send("You are in your profile...");
});

const personRoutes = require("./routes/personrouts");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuroutes");
app.use("/menu", menuRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});