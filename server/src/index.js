const express = require('express')
const app = express()
// cross origin resource sharing-> FE port x BE port
const cors = require('cors')
require('dotenv').config()
//body parser
app.use(express.json())
const port = process.env.PORT
const prouductRoute = require('./routes/products')
const ridesRoute = require('./routes/rides')
const userRoute = require('./routes/users')
const messageRoute = require('./routes/message')

const  dbConnect  = require('./db/connection')
dbConnect()

app.use(cors())

app.use(ridesRoute)
app.use(userRoute)
app.use(messageRoute)
app.use(prouductRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})