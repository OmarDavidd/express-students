const Student = require('../models/estudiante');

const studentService = {
	getAllStudents: async () => {
		try {
			const data = await Student.find();
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getStudentById: async (id) => {
		try {
			const data = await Student.findById(id);
			if (!data) {
				return { msg: `No se encontro el usuario con el id${id}` };
			}

			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	addStudent: async (student) => {
		try {
			const newStudent = new Student(student);
			console.log('newStudent', newStudent);

			const data = await newStudent.save();
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	updateStudent: async (id, student) => {
		try {
			const data = await Student.findByIdAndUpdate(id, student, { new: true })
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	deleteStudent: async (id) => {
		try {
			const data = await Student.findByIdAndDelete(id);
			return data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
}

module.exports = studentService;