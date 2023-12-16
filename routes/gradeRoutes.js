// Define API routes and their corresponding controllers.
// routes/gradeRoutes.js

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Get all grades
router.get('/', gradeController.getAllGrades);

// Get grade by ID
router.get('/:id', gradeController.getGradeById);

// Add other routes as needed

module.exports = router;
