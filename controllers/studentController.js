const { get } = require('mongoose');
const studentService = require('../services/estudianteService');

const studentController = {
	getAllStudents: async (req, res) => {
		try {
			const data = await studentService.getAllStudents();
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}

			return res.render('students/allStudents', { title: 'Get all students', students: data.data });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error });
		}
	},
	getFormStudent: async (req, res) => {
		return res.render('students/formStudent', { title: 'Agregar student', student: null });
	},
	getFormUpdateStudent: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.getStudentById(id);
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}
			return res.render('students/formStudent', { title: 'Actualizar student', student: data.data });
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
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}

			return res.redirect('/students');

		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error });
		}
	},
	getStudentById: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.getStudentById(id);
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}
			return res.render('students/getStudent', { title: 'Get student by id', student: data.data });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error });
		}
	},
	updateStudent: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await studentService.updateStudent(id, req.body);
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}
			return res.redirect('/students');

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
			if (data.msg) {
				return res.render('Error404', { title: 'Error', error: data.msg });
			}

			return res.redirect('/students');

		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error });
		}
	}

}

module.exports = studentController;