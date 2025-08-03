const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Akash",
    username: "Akash",
    email: "santra999@gmail.com"
  });
  res.send(createdUser);
});

app.get("/updeat", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate({username: "Akash"}, {name: "Akash Santra"}, {new: true})
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  let read = await userModel.find()
  res.send(read);
});

app.delete("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({username: "Akash"})
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
