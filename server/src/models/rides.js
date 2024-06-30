const mongoose = require('mongoose');
const { Schema } = mongoose;

const RidesSchema = new Schema({
  passengerId: String,
  riderId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  price: Number,
  pickUp: String,
  destination: String,
  pickUpCoords: Object,
  destinationCoords: Object,
  distance: Number,
  status: {
    type: String,
    enum : ['pending','accepted','pickedUp','cancelled','completed'],
    default: 'pending'
  },
  vehicleType: String
});

const Rides = mongoose.model('Rides', RidesSchema);
module.exports = Rides



