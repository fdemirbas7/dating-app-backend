const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.get('/', (req, res) => {
  User.find({}, async function (err, users) {
    var userMap = {};

    await users.forEach(function (user) {
      userMap[user._id] = user;
    });
    res.status(200);
    res.send(userMap);
  });
});

module.exports = router;
