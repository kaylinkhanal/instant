const Rides = require('../models/rides')
const User = require('../models/users')



const getListOfRides = async function (req, res) {
  const data =  await Rides.find({status: 'pending'})
  res.json(data)
}


// const addNewRides =  async (req, res)=> {

//     res.send("ok")
//   }


  const changeRideStatus =  async (req, res)=> {
    const ride = await Rides.findById(req.params.id).populate('riderId')
    ride.status = req.body.status
    ride.riderId = req.body.riderId
    ride.save()
    res.json({
      msg: "ride Status updated",
      ride
    })
   }
  

module.exports = {getListOfRides,changeRideStatus}
