const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const sushisRouter = require('./routes/sushis');
const adminRouter = require('./routes/admin');
const authsRouter = require('./routes/auths');
const paymentRouter = require('./routes/payment');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'votre projet', resave: false, saveUninitialized: false }));
app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/payment', paymentRouter);
app.use('/sushis', sushisRouter);
app.use('/admin', adminRouter);
app.use('/auths', authsRouter);

module.exports = app;
