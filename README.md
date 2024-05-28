# instant


FEATURES:

PHASE 1-> to send a passenger from pickup to destination

 - Multi user login
 - Rider and User and Admin  Panel/Dashboard
    1.1 USER->  NEW RIDE SECTION, PRICE GENERATE(distance, time, vehicleType), PRICE BARGAIN,  
    1.2 RIDER-> Different Sign Up, Request 
    1.3 ADMIN-> Admin approves rider(SENDS EMAIL TO THE RIDER), pricePerKMBike, 
 - Role based PROFILE
 - Ride cancellation
 - RIDE HISTORY
 - Google map 
 - Rider details
 - Visualization
 - Real time riders location updates 
 - Notifications


PHASE 2: to learn new technologies
1. Chat
2. Rider Rating
3. OAuth
4. Esewa




PRICE CALCULATION LOGIC:
let price =0
let distance= 3.2
let pricePerUnitKm={
  bike: 100,
  car:200
}
const rideType = 'car'
price = pricePerUnitKm[rideType]* distance

function isMaxTime(time){
  if(time > 18 || time<6){
    price = price+100
  }
}
isMaxTime(10)
price




PRICE BARGAIN: BETWEEN +- 2%


BASIC RIDE KEYS:

{
  price: 500,
  pickUp: 'Raniban, Kathmandu',
  pickUpCoords: {lon:32.3, lat:32.2},
  destinationUpCoords: {lon:32.4, lat:32.5},
  distance: 32,
  destination: 'Tinkune, Kathmandu',
  status: ['pickedUp', 'cancelled','pending', 'completed'],
  vehicleType: 1,
  riderId: 3212312,
  passenderId: 12312,
}