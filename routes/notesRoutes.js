const {createNote, getAllNotes, getNote, updateNote, deleteNote    }= require('../controllers/notesController');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// create a new note
router.post('/', authMiddleware, createNote);
// get all notes
router.get('/', authMiddleware, getAllNotes);
// get a single note
router.get('/:id', authMiddleware, getNote);
// update a note
router.put('/:id', authMiddleware, updateNote);
//delete a note
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;