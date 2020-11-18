// files for all api routes for the application

const dbFunctions = require("../db/db");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  // Populates the saved notes
  app.get("/api/notes", (req, res) => {
    return res.json(dbFunctions.readData());
  });

  // post route that saves
  app.post("/api/notes", (req, res) => {
    // sets the request body to newNote
    const newNote = req.body;

    // sets the id key in the json object to a unique id
    newNote.id = uuidv4();

    // reads the db.json file to get the currently saved notes
    const notes = dbFunctions.readData();

    // add the newNote the the currently saved notes
    notes.push(newNote);

    // writes the notes back to the db.json file with the newNote added
    dbFunctions.writeData(notes);

    return res.json(notes);
  });

  // route  for deleting notes from the api
  app.delete("/api/notes/:id", (req, res) => {
    // reads the json file to get the currently saved notes
    const notes = dbFunctions.readData();

    // filters out the selected note to be deleted based on the query id and sets the objects to a new array
    const filteredNotes = notes.filter((el) => el.id != req.params.id);

    // writes the new array to the json file to be saved
    dbFunctions.writeData(filteredNotes);

    return res.json(filteredNotes);
  });
};
