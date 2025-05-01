const { get } = require('mongoose');
const studentService = require('../services/estudianteService');

const studentController = {
	getAllStudents: async (req, res) => {
		try {
			const data = await studentService.getAllStudents();

			return res.render('students/allStudents', { title: 'Get all students', students: data });
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	},
	getFormStudent: async (req, res) => {
		return res.render('students/formStudent', { title: 'Agregar student', student: null });
	},
	getFormUpdateStudent: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.getStudentById(id);
			return res.render('students/formStudent', { title: 'Actualizar student', student: data });
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	},
	addStudent: async (req, res) => {
		try {
			const data = await studentService.addStudent(req.body);
			if (data) {
				return res.redirect('/students');
			}
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	},
	getStudentById: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.getStudentById(id);
			return res.render('students/getStudent', { title: 'Get student by id', student: data });
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	},
	updateStudent: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.updateStudent(id, req.body);
			if (data) {
				return res.redirect('/students');
			}
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	},
	deleteStudent: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.deleteStudent(id);
			console.log('data', data);

			if (data) {
				return res.redirect('/students');
			}
			return res.render('Error404', { title: 'Error', error: 'No se encontro el usuario con el id' });
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	}

}

module.exports = studentController;