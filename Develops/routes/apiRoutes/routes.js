const router = require('express').Router();
const { notes } = require('../../db/db.json');

// Get Note Route
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post Note Route
router.post('/notes', (req, res) => {
    if(!req.body.id){
        createNote(req.body, notes);
    }else{
        updateNote(req.body, notes);
    };

    res.join(req.body);
});

// Delete Note Route