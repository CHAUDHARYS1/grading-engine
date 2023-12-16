// Define API routes and their corresponding controllers.
// routes/attendanceRoutes.js

const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Get all attendance records
router.get('/', attendanceController.getAllAttendance);

// Get attendance record by ID
router.get('/:id', attendanceController.getAttendanceById);

// Add other routes as needed

module.exports = router;
