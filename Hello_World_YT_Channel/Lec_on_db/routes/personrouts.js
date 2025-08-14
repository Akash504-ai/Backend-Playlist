const express = require('express')
const router = express.Router();
const Person = require('../models/Person');

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fatched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;

    // Validate work type
    if (!['chef', 'waiter', 'manager'].includes(workType)) {
      return res.status(400).json({ message: "Invalid work type specified" });
    }

    // Fetch persons with the given work type
    const data = await Person.find({ work: workType });

    // If no persons found
    if (data.length === 0) {
      return res.status(404).json({ message: "No persons found with the specified work type" });
    }

    // Send the data
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // Update person by ID
    const response = await Person.findByIdAndUpdate(id, data, { new: true });

    // If person not found
    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // Delete person by ID
    const response = await Person.findByIdAndDelete(id);

    // If person not found
    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}); 

module.exports = router;