const express = require('express');
const ruta = express.Router();
const studentController = require('../controllers/studentController');


ruta.get('/', studentController.getAllStudents);
ruta.post('/', studentController.addStudent);


module.exports = ruta;