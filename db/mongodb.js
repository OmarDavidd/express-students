const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.URI);
		console.log('Conecctado');
	} catch (error) {
		console.log('Error de coneccion: ', error);
	}
}

module.exports = connectDB;