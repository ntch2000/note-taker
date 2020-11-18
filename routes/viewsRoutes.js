// File for all the view routes utilized for this application

const path = require("path");

module.exports = (app) => {
  // view route to display the notes page
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // view route to display the main page of the application
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
