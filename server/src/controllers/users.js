const User = require('../models/users')


const registerUser =  function (req, res) {
  User.create(req.body)
    res.send("ok")
  }

module.exports = {registerUser}
