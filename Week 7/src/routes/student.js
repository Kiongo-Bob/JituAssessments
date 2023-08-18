const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.post('/students', async (req, res) => {
  // Implement adding a new student
});

router.put('/students/:id/fee', async (req, res) => {
  // Implement updating student fee
});

router.delete('/students/:id', async (req, res) => {
  // Implement soft delete of a student
});

router.get('/students', async (req, res) => {
  // Implement fetching all students
});

router.get('/students/:id', async (req, res) => {
  // Implement fetching a specific student
});

module.exports = router;
