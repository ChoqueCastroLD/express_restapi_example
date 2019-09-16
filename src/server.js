// Require Dependencies

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


// Load config

const config = require('./v1/config/config.js');


// Instantiate an Express Application

const app = express();


// Configure Express App Instance

app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));
app.use(cookieParser());
app.use(morgan(config.app.logFormat));

app.use('*', (req, res, next) => {
    // All responses will be json unless told otherwise
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Main Routes

app.use('/v1/users', require('./v1/routes/users.js'));

app.use('*', (req, res) => {
    res
    .status(404)
    .json( {msg: 'Not valid endpoint'} );
})

// Open Server on configurated Port

app.listen(
    config.app.port,
    () => console.info('Server listening on port ', config.app.port)
);