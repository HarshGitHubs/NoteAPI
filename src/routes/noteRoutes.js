const express = require("express");
const { getNote, createNote, deleteNote, updateNote, getAllNotes } = require("../controllers/noteController");
const noteRouter = express.Router();

noteRouter.get("/", getNote)

noteRouter.get("/getAllNotes" , getAllNotes)

noteRouter.post("/", createNote)

noteRouter.delete("/:id" , deleteNote)

noteRouter.put("/:id" , updateNote)

module.exports = noteRouter