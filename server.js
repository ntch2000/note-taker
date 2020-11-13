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

// set object array for notes
// const notes = [
//   {
//     title: "Note Title",
//     text: "Note text",
//   },
// ];

// setup routes code

// notes route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// api route
app.get("/api/notes", (req, res) => {
  // reads the db.json file with fs
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    // parses the data in the file as JSON
    const notes = JSON.parse(data);
    // returns the JSON data requested
    return res.json(notes);
  });
});

// main page route - ordered last due to the asterisk route being a wildcard route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// post route

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  //console.log(newNote);

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);

    console.log(notes);

    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      return res.json(notes);
    });
  });
});
