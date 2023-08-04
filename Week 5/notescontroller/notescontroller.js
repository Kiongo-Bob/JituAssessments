const { DB } = require('../database/helpers/index.js');
const { v4: uuidv4 } = require('uuid');
const pool = require('../database/config/dbconfig.js');

const createNote = async (req, res) => {
	try {
		const id = uuidv4();
		const createdAt = new Date();
		const { content, title } = req.body;

		await DB.exec('createNote', { id, content, title, createdAt });

		res.status(201).json({ message: 'Note created successfully' });
	} catch (error) {
		console.log('Error creating the note:', error.message);
		res.status(500).json({ message: 'Failed to create note' });
	}
};

const getAllNotes = async (req, res) => {
	try {
		const query = `
      SELECT *
      FROM notesTable;
    `;
		const notes = (await DB.query(query)).recordset;

		res.status(200).json(notes);
	} catch (error) {
		console.log('Error fetching notes:', error.message);
		res.status(500).json({ message: 'Failed to fetch notes' });
	}
};

const getSingleNote = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await DB.exec('getNoteById', { id });
		console.log(result);
		const note = result.recordset[0];

		if (!note) {
			return res.status(404).json({ message: 'Note not found' });
		}

		res.status(200).json({ note });
	} catch (error) {
		console.log('Error fetching the note:', error.message);
		res.status(500).json({ message: 'Failed to fetch note' });
	}
};

const updateNote = async (req, res) => {
	try {
		const { id } = req.params;
		const createdAt = new Date();
		const { content, title } = req.body;

		const result = await DB.exec('updateNoteById', { id, content, title, createdAt });

		if (result.rowsAffected[0] === 0) {
			return res.status(404).json({ message: 'Note not found' });
		}

		res.status(200).json({ message: 'Note updated successfully' });
	} catch (error) {
		console.log('Error updating the note:', error.message);
		res.status(500).json({ message: 'Failed to update note' });
	}
};

const deleteNote = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await DB.exec('deleteNoteById', { id });

		if (result.rowsAffected[0] === 0) {
			return res.status(404).json({ message: 'Note not found' });
		}

		res.status(200).json({ message: 'Note deleted successfully' });
	} catch (error) {
		console.log('Error deleting the note:', error.message);
		res.status(500).json({ message: 'Failed to delete note' });
	}
};

module.exports = createNote;
module.exports = getAllNotes;
module.exports = getSingleNote;
module.exports = updateNote;
module.exports = deleteNote;
