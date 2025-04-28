const studentService = require('../services/estudianteService');

const studentController = {
	getAllStudents: async (req, res) => {
		try {
			const data = await studentService.getAllStudents();

			return res.send({
				msg: null,
				data
			})
		} catch (error) {
			console.log('controller', error);

			return res.send({
				msg: error,
				data: null
			})
		}
	},
	addStudent: async (req, res) => {
		try {
			const data = await studentService.addStudent(req.body);
			return res.send({
				msg: null,
				data
			})
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
			return res.send({
				msg: null,
				data
			})
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
			return res.send({
				msg: null,
				data
			})
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
			return res.send({
				msg: null,
				data
			})
		} catch (error) {
			return res.send({
				msg: error,
				data: null
			})
		}
	}

}

module.exports = studentController;