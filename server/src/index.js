const express = require('express')
const app = express()
const port = 8000
const prouductRoute = require('./routes/products')
const ridesRoute = require('./routes/rides')

const  dbConnect  = require('./db/connection')
dbConnect()
app.use(express.json())
app.use(ridesRoute)
app.use(prouductRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})