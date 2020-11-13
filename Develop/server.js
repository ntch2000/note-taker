// 1. require express package
const express = require("express");
const path = require("path");

const fs = require("fs");

// 2. create instance of express
const app = express();

// 3. set listen PORT
const PORT = process.env.PORT || 3000;

// 5. add middleware code
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4. listen on  PORT
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

// set object array for notes
const notes = [
  {
    title: "Note Title",
    text: "Note text",
  },
];

// setup routes code

// notes route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// main page route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// api route
app.get("/api/notes", (req, res) => {
  return res.json(notes);
});
