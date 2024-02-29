const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoose.connect(process.env.MONGOURL)

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

//Routes to be defined
app.use('/api', require('./Routes/testroute'))

//Server
app.listen(3000, () => {console.log("Server started on port 3000")})
