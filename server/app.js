const express = require('express');
const db = require('./db');
const controller = require('./controllers');
// Middleware
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes


// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

//Connect controller methods to their corresponding routes
app.get('/users/:id', controller.get);
app.post('/users/:id', controller.post);






