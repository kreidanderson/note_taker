const express = require("express");
const path = require("path");
const fs = require("fs");
const { raw } = require("express");

const app = express();
const PORT = process.env.PORT || 3035;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        const newData = JSON.parse(data);
        res.json(newData);
    })
});

app.post("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;

        // Get the notes from the database
        const noteData = JSON.parse(data);

        //check to see if there are any notes, if there aren't set id to 1
        if(noteData.length === 0){
            id = 1;
            // req.body.id: null
            req.body.id = id // req.body.id = 1
        } else {
            var last = noteData[noteData.length - 1]
            let newNoteId = last.id + 1;
            req.body.id = newNoteId;
        }

        // Set the id


        // Add new note to notes list
        noteData.push(req.body);


        // Write note list to db.json file
        fs.writeFile("./db/db.json", JSON.stringify(noteData), function (err) {
            if (err) throw err;
            
            res.status(200).end();
        
        });
    });
});

app.delete("/api/notes/:id", function (req, res) {
    // Get id of note to delte from url params
    let id = req.params.id;

    // Get note list
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;

        
        let noteList = JSON.parse(data);
        let newNoteList = [];
        // create new array with all notes except note with id to delete
        noteList.forEach(note => {
            if (note.id == id) {
                // do nothing, don't add it to the new list
            } else {
                newNoteList.push(note);
            }
        });


        // write note list to db.json file
        fs.writeFile("./db/db.json", JSON.stringify(newNoteList), function (err) {
            if (err) throw err;

            res.status(200).end();
        
        });
        // respond with a status 200

    });

   

    //splice or slice
    })
    // Start the server on the port
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));