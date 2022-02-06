const express = require('express');
const app = express();
const { noteInfo }= require("./db/db.json");
const path = require("path");
const PORT = process.env.PORT || 3001;




app.get("/api/notes", (req, res) => {
    res.json(noteInfo);
    console.log(req.query);
}
);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


