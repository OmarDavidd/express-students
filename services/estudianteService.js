const student = require('../models/estudiante');

const studentService = {
	getAllStudent: async () => {
		try {
			const data = student.find();
			return {
				msg: null,
				data
			}
		} catch (error) {
			console.log(error);
			return {
				msg: error,
				data: null
			}
		}
	},
	getStudentById: (id) => {

	},
	addStudent: (student) => {

	},
	updateStudent: (id, student) => {

	},
	deleteStudent: (id) => {

	},
}

module.exports = studentService;