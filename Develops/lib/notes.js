const { json } = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Functions for Notes 

// Creating the Note
function createNote(body, noteArr) {
    const note = body;
    var note_id = uuidv4();
    note.id = note_id;
    noteArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: noteArr}, null, 2)
    );
    return note;
};

