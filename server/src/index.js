const express = require('express')
const app = express()
// cross origin resource sharing-> FE port x BE port
const cors = require('cors')
const { Server } = require('socket.io');
const { createServer } = require('node:http');
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000"
  }
});


require('dotenv').config()
//body parser
app.use(express.json())
const port = process.env.PORT
const prouductRoute = require('./routes/products')
const ridesRoute = require('./routes/rides')
const userRoute = require('./routes/users')
const messageRoute = require('./routes/message')

const  dbConnect  = require('./db/connection');
const Rides = require('./models/rides');
dbConnect()

app.use(cors())




io.on('connection', (socket) => {

  socket.on('rides', async(rides) => {
    await Rides.create(rides)
    const newRides = await  Rides.find({status: 'pending'})
    io.emit('rides',newRides  )
  });

  socket.on('acceptedRideDetails', async(acceptedRideDetails) => {
    io.emit('acceptedRideDetails',acceptedRideDetails  )
  });
  
});


app.use(ridesRoute)
app.use(userRoute)
app.use(messageRoute)
app.use(prouductRoute)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})