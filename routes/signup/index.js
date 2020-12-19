const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const userValidationSchema = require('../../models/UserValidation');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('signup');
});

router.post('/', async (req, res) => {
  const requestedUser = req.body;
  const hashedPassword = await bcrypt.hash(requestedUser.password, 10);
  requestedUser.password = hashedPassword;
  const validation = userValidationSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({ error: validation.error.toString() });
  } else {
    const user = new User(requestedUser);
    user.save();
    return res.send(`User: ${user._id} is saved to the db`);
  }
});

module.exports = router;
