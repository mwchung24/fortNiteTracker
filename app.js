const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pg = require('pg');
const fortNite = require('fortnite-api');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Set up the express app
const app = express();

// Logs requests to the console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Require routes for the application
require('./server/routes')(app);

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// Create connection to the PostgreSQL database
// const connection = "postgres://fortNiteTracker:T3sting!@localhost:5432/fortNiteTracker";
// app.get('/', function(req, res) {
//   pg.connect(connection, function(err, client, done) {
//     if(err) {
//       return console.error('error fetching client from pool', err);
//     }
//     client.query('SELECT * FROM Users', function(err, result) {
//       console.log(err);
//       console.log(result);
//       if(err) {
//         return console.error('error running query', err);
//       }
//       res.render('index', {users: result.rows});
//       done();
//     });
//   });
// });

// let forniteAPI = new fortnite(
//   [
//     "mwchung24@gmail.com",
//     "Hanna072709",
//
//   ]
// );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
