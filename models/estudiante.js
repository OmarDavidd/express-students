const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
	},
	matricula: {
		type: String,
	},
	promedio: {
		type: Number,
	},
	cursos: {
		type: [String],
		default: [],
	}
}, {
	timestamps: true,
});

module.exports = mongoose.model("estudiantes", estudianteSchema);
