const mongoose = require('mongoose');
const { Schema } = mongoose;

const RidesSchema = new Schema({
  riderId: String,
  passengerId: String,
  price: Number,
  pickUp: String,
  destination: String,
  pickUpCoords: Object,
  destinationCoords: Object,
  distance: Number,
  // status: ['pickedUp', 'cancelled','pending', 'completed'],
  vehicleType: String
});

const Rides = mongoose.model('Rides', RidesSchema);
module.exports = Rides

