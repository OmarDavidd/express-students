const express = require('express');
const ruta = express.Router();
const studentController = require('../controllers/studentController');


ruta.get('/', studentController.getAllStudents);
ruta.get('/:id', studentController.getStudentById);
ruta.get('/new/student', studentController.getFormStudent);
ruta.post('/', studentController.addStudent);
ruta.put('/:id', studentController.updateStudent);
ruta.get('/update/student/:id', studentController.getFormUpdateStudent);
ruta.delete('/:id', studentController.deleteStudent);


module.exports = ruta;