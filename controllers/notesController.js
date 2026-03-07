const Notes = require('../models/notes');

// create a new note
const createNote = async(req, res, next)=>{
    try {
        const {title, content} = req.body;
        const userID = req.userID;
        const note = await Notes.create({title, content, userId: userID });
        res.status(201).json({message: "Note created successfully", note});
    } catch (error) {
        next(error);
    }
}

// get all notes
const getAllNotes = async(req, res, next)=>{
    try {
        const userID = req.userID;
        const notes = await Notes.find({userId: userID});
        res.status(200).json({message: "Your notes have been retrieved successfully", notes});
    } catch (error) {
        next(error);
    }
}

// get a single note
const getNote = async(req, res, next)=>{
    try {
        const userID = req.userID;
        const noteId = req.params.id;
        const note = await Notes.findOne({_id: noteId, userId: userID});
        if(!note){
            return res.status(400).json({message: 'The note does not exist'});
        }
        res.status(200).json({message: 'Your note has been retrieved succssfully', note});
    } catch (error) {
        next(error);
    }
}

// update a note
const updateNote = async(req, res, next)=>{
    try {
        const userID = req.userID;
        const noteID = req.params.id;
        const {title, content} = req.body;
        const updatedNote = await Notes.findByIdAndUpdate({_id: noteID, userId: userID}, {title, content}, {new: true});
        if(!updatedNote){
            return res.status(400).json({message: 'The note does not exist'});
        }
        res.status(200).json({message: 'Note updated successfully', updatedNote})
    } catch (error) {
        next(error);
    }
}

// delete a note 
const deleteNote = async(req, res, next)=>{
    try {
        const userID = req.userID;
        const noteID = req.params.id;
        const deletedNote = await Notes.findByIdAndDelete({
            _id: noteID, userId: userID
        });
        if(!deletedNote){
            return res.status(400).json({message: 'The note does not exist'})
        }
        res.status(200).json({message: 'Note deleted successfully'});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNote,
    updateNote,
    deleteNote
}
