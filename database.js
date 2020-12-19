const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PWD = process.env.DB_PASS;

module.exports = async () => {
  await mongoose
    .connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to the Database, Well Done :))');
    })
    .catch((err) => {
      console.log('We Cant Connect to the Database, Sorry :(');
      process.exit();
    });
};
