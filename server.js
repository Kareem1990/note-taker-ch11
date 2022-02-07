const express = require('express');
const app = express();
const  { noteInfo } = require("./db/db.json");
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

function createNewNote(body, notesArray) {
  console.log(body);
  // our function's main code will go here!
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ noteInfo: notesArray }, null, 2)
    );

  return note;  
  // return finished code to post route for response
}
app.get("/api/notes", (req, res) => {
  res.json(noteInfo);
}
);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

// const createNote = () => {

// }




  


app.post('/api/notes', (req, res) => {
     // set id based on what the next index of the array will be
     //   req.body.id = noteInfo.length.toString();
     // add notes to json file and notes array in this function
  const note = createNewNote(req.body, noteInfo);
  
  res.json(note);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


//   https://note-taker-ch11.herokuapp.com/