const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home route – read and list all tasks
app.get("/", (req, res) => {
  const dirPath = "./files";

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading files");
    }

    const tasks = files.map((file) => {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, "utf-8");

      return {
        title: file.replace(".txt", ""), // remove .txt for clean display
        details: content,
      };
    });

    res.render("index", { tasks });
  });
});

// View a single task
app.get("/task/:title", (req, res) => {
  const taskTitle = req.params.title;
  const filePath = `./files/${taskTitle}.txt`;

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      console.error(err);
      return res.status(404).send("Task not found");
    }

    res.render("task", {
      title: taskTitle,
      details: content,
    });
  });
});

// Show edit form
app.get("/edit/:title", (req, res) => {
  const filePath = `./files/${req.params.title}.txt`;

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) return res.status(404).send("Task not found");

    res.render("edit", {
      previous: req.params.title,
      content: content,
    });
  });
});

// Handle edit form submission
app.post("/edit", (req, res) => {
  const { previous, newTitle, newContent } = req.body;

  const oldPath = `./files/${previous}.txt`;
  const safeNewTitle = newTitle.replace(/[^a-z0-9]/gi, "_");
  const newPath = `./files/${safeNewTitle}.txt`;

  fs.rename(oldPath, newPath, (err) => {
    if (err) return res.status(500).send("Error renaming file");

    fs.writeFile(newPath, newContent, (err) => {
      if (err) return res.status(500).send("Error updating content");
      res.redirect("/");
    });
  });
});

// Create a new task
app.post("/create", (req, res) => {
  const { title, details } = req.body;

  if (!title || !details) {
    return res.status(400).send("Title and details are required");
  }

  const safeTitle = title.replace(/[^a-z0-9]/gi, "_");
  const filePath = `./files/${safeTitle}.txt`;

  fs.writeFile(filePath, details, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving task");
    }

    res.redirect("/");
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Task Manager running at http://localhost:${port}`);
});
