const express = require('express');
const morgan = require('morgan');
const connectDB = require('./db/mongodb');
const studentRoutes = require('./routes/student');
require('dotenv').config();

//
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();
// set
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Welcome to my mongo proyect');

})

app.get('/student', studentRoutes);


// Server
app.listen(port, () => {
	console.log(`servidor en: http://localhost:${port}`);
})