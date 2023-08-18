const sql = require('mssql');
const { pool } = require('../database/config/dbconfig')

module.exports = {
  addStudent: async (req, res) => {
    try {
      const { regNo, StdName, stream, feeBal } = req.body;
      pool = await sql.connect(config);
      // Database insertion with response
      res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
      console.error('Error adding student:', error);
      res.status(500).json({ error: 'An error occurred while adding the student' });
    }
  },

  updateFee: async (req, res) => {
    try {
      const regNo = req.params.id; 
      const { feeBal } = req.body;

      const request = pool.request();
      request.input('regNo', studentId);
      request.input('feeBal', feeBalance);

      // Update the fee balance of the student
      const result = await request.query('UPDATE Students SET FeeBal = @feeBal WHERE StudentId = @regNo');

      res.status(200).json({ message: 'Fee balance updated successfully' });
    } catch (error) {
      console.error('Error updating fee balance:', error);
      res.status(500).json({ error: 'Error occurred while updating fee balance' });
    }
  },
};
