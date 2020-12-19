const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  password: String,
  age: Number,
  bio: String,
  sex: String,
  hobbies: Array,
  likedGenres: Array,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
