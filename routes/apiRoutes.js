// ALL API ROUTES HERE
const path = require("path");
const dbFunctions = require("../db/db");

module.exports = (app) => {
  const dbPath = "../db/db.json";

  // Populates the saved notes
  app.get("/api/notes", (req, res) => {
    // console.log("test");
    // console.log(dbFunctions());
    return res.json(dbFunctions());
  });
};
