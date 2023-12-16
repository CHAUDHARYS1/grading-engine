// Logic to handle HTTP requests and interact with the database.
const Grade = require('../models/Grade');

// Get all grades
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get grade by ID
exports.getGradeById = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.json(grade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add other CRUD operations as needed
