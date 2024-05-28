const Rides = require('../models/rides')


const addNewRides =  function (req, res) {
    Rides.create(req.body)
    res.send("ok")
  }

module.exports = {addNewRides}
