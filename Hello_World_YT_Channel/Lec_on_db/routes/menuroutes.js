const express = require('express')
const router = express.Router();
const MenuItem = require('../models/MenuItem');


router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const response = await MenuItem.insertMany(data);
    console.log("Menu items saved");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category;

    // Validate category
    if (!['spicy', 'sweet', 'sour', 'bitter'].includes(category)) {
      return res.status(400).json({ message: "Invalid category specified" });
    }

    // Fetch menu items with the given category
    const data = await MenuItem.find({ taste : category });

    // If no items found
    if (data.length === 0) {
      return res.status(404).json({ message: "No menu items found in the specified category" });
    }

    // Send the data
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
