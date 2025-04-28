const student = require('../models/estudiante');

const studentService = {
	getAllStudent: async () => {
		try {
			const data = await student.find();
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getStudentById: async (id) => {
		try {
			const data = await student.findById(id);
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	addStudent: async (student) => {
		try {
			const newStudent = new student(student);
			const data = await newStudent.save();
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	updateStudent: async (id, student) => {
		try {
			const data = await student.findByIdAndUpdate(id, student, { new: true })
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	deleteStudent: async (id) => {
		try {
			const data = await student.findByIdAndDelete(id);
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
}

module.exports = studentService;