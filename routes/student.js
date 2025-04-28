const express = require('express');
const ruta = express.Router();
const studentController = require('../controllers/studentController');


ruta.get('/', studentController.getAllStudents);
ruta.get('/:id', studentController.getStudentById);
ruta.post('/', studentController.addStudent);
ruta.put('/:id', studentController.updateStudent);


module.exports = ruta;