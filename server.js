const express = require('express');
const app = express();
const { noteInfo }= require("./db/db.json");
const path = require("path");

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });


app.get("/api/notes", (req, res) => {
    res.json(noteInfo);
    console.log(req.query);
}
);





