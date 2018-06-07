const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MMapi');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/transactions'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);

module.exports = app;