const Student = require('../models/estudiante');

const studentService = {
	getAllStudents: async () => {
		try {
			const data = await Student.find();
			if (!data) {
				return { msg: 'No se encontraron estudiantes', data: null };
			}
			return { msg: null, data }
		} catch (error) {
			return { msg: error, data: null };
		}
	},
	getStudentById: async (id) => {
		try {
			const data = await Student.findById(id);
			if (!data) {
				return { msg: `No se encontro el estudiante con el id ${id}`, data: null };
			}
			return { msg: null, data }
		} catch (error) {
			return { msg: error, data: null };
		}
	},
	addStudent: async (student) => {
		try {
			const newStudent = new Student(student);

			const data = await newStudent.save();
			if (!data) {
				return { msg: 'No se pudo agregar el estudiante', data: null };
			}
			return { msg: null, data }
		} catch (error) {
			return { msg: error, data: null };
		}
	},
	updateStudent: async (id, student) => {
		try {
			const data = await Student.findByIdAndUpdate(id, student, { new: true })
			if (!data) {
				return { msg: `No se encontro el estudiante con el id ${id}`, data: null };
			}
			return { msg: null, data }
		} catch (error) {
			return { msg: error, data: null };
		}
	},
	deleteStudent: async (id) => {
		try {
			const data = await Student.findByIdAndDelete(id);
			if (!data) {
				return { msg: `No se encontro el estudiante con el id ${id}`, data: null };
			}
			return { msg: null, data }
		} catch (error) {
			return { msg: error, data: null };
		}
	},
}

module.exports = studentService;