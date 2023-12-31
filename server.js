// Entry point to start your server.

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; 

//Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/grading-engine', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//middleware
app.use(bodyParser.json());

//import routes
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/attendance', attendanceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});