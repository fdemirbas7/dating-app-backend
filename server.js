const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const users = require('./routes/users');
const login = require('./routes/login');
const signup = require('./routes/signup');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', users);
app.use('/login', login);
app.use('/signup', signup);

app.get('/', (req, res) => {
  res.send('Hi there!');
});

module.exports = app;
