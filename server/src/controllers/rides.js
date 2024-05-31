const Rides = require('../models/rides')



const getListOfProducts = async function (req, res) {
  const data =  await Rides.find()
  res.json(data)
}


const addNewRides =  function (req, res) {
    Rides.create(req.body)
    res.send("ok")
  }

module.exports = {addNewRides,getListOfProducts}
