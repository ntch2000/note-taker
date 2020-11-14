// ALL VIEW ROUTES HERE

const path = require("path");

module.exports = (app) => {
  const dbPath = "../db/db.json";

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
