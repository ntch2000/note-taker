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

// code to serve static files to html
app.use(express.static(path.join(__dirname, "public")));

// 4. listen on  PORT
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

// CREATE ROUTES FOLDER TO HAVE VIEW ROUTES AND API ROUTES
// ALLOWS FOR SIMPLER SERVER CODE

// DB FOLDER SHOULD HAVE YOUR READ, WRITE, AND DELETE METHODS

require("./routes/apiRoutes")(app);
require("./routes/viewsRoutes")(app);

//==================================================
// Original working code
//==================================================

// const dbPath = "./db/db.json";
// // setup routes code

// // notes route
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// // api route
// app.get("/api/notes", (req, res) => {
//   // reads the db.json file with fs
//   fs.readFile(dbPath, (err, data) => {
//     if (err) throw err;
//     // parses the data in the file as JSON
//     const notes = JSON.parse(data);
//     // returns the JSON data requested
//     return res.json(notes);
//   });
// });

// // main page route - ordered last due to the asterisk route being a wildcard route
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// // post route

// app.post("/api/notes", (req, res) => {
//   // sets the request body to newNote
//   const newNote = req.body;

//   //======================
//   // Need to find a better way to get a random id number
//   //========================
//   newNote.id = Math.floor(Math.random() * 10000);
//   console.log(newNote);

//   // reads the db.json file to get the current array of notes
//   fs.readFile(dbPath, (err, data) => {
//     if (err) throw err;
//     // parses data to JSON object and adds it to notes array
//     const notes = JSON.parse(data);

//     // pushes new note from the request body to the notes array
//     notes.push(newNote);

//     // writes the new notes array as a string to the db.json  file
//     fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
//       if (err) throw err;
//       return res.json(notes);
//     });
//   });
// });

// // delete route
// app.delete("/api/notes/:id", (req, res) => {
//   // reads the json file to get the currently saves notes
//   fs.readFile(dbPath, (err, data) => {
//     if (err) throw err;
//     const notes = JSON.parse(data);

//     // filters out the selected note to be deleted based on the query id and sets the objects to a new array
//     const filteredData = notes.filter((el) => el.id != req.params.id);

//     //  write the new array to the json file to be saved
//     fs.writeFile(dbPath, JSON.stringify(filteredData), (err) => {
//       if (err) throw err;
//       return res.json(filteredData);
//     });
//   });
// });
