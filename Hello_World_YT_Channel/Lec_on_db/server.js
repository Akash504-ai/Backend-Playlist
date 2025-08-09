const express = require("express");
const app = express();
const db = require("./db");
const port = 3000;

const bodyPerser = require("body-parser");
app.use(bodyPerser.json());
//body-parser is a middleware (special function in Express) that reads the body of incoming HTTP requests.

// Without it, your server wouldn’t automatically understand JSON data sent from Postman or any client.

// body-parser is like a translator for your server.
// When Postman sends some JSON data to your server, it arrives as raw text.
// body-parser translates that raw text into a normal JavaScript object so you can use it directly with req.body.

const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

app.get("/", (req, res) => {
  res.send("Hello World!.....This is my world");
});

app.get("/profile", (req, res) => {
  res.send("You are in your profile...");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fatched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("Menu item saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/menu", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
