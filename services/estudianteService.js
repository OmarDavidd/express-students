const student = require('../models/estudiante');

const studentService = {
	getAllStudent: async () => {
		try {
			const data = await student.find();
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
	getStudentById: async (id) => {
		try {
			const data = await student.findById(id);
			return {
				msg: null,
				data
			}
		} catch (error) {
			console.log(error);
			return {
				msg: error,
				data: []
			}
		}
	},
	addStudent: async (student) => {
		try {
			const newStudent = new student(student);
			const data = await newStudent.save();
			return {
				msg: null,
				data
			}
		} catch (error) {
			console.log(error);
			return {
				msg: error,
				data: []
			}
		}
	},
	updateStudent: async (id, student) => {
		try {
			const data = await student.findByIdAndUpdate(id, student);
			return {
				msg: null,
				data
			}
		} catch (error) {
			console.log(error);
			return {
				msg: error,
				data: []
			}
		}
	},
	deleteStudent: async (id) => {
		try {
			const data = await student.findByIdAndDelete(id);
			return {
				msg: null,
				data
			}
		} catch (error) {
			console.log(error);
			return {
				msg: error,
				data: []
			}
		}
	},
}

module.exports = studentService;