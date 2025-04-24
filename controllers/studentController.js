const studentService = require('../services/estudianteService');

const studentController = {
	getAllStudents: async (req, res) => {
		try {
			const data = await studentService.getAllStudents();
			/*
			return res.send({
				msg: null,
				data
			})*/
			res.send("controller");
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
}

module.exports = studentController;