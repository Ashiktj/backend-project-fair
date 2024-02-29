//loads .env file content into process.env by default
require('dotenv').config()

//import express
const express = require('express')

const cors = require('cors')

const db = require("./DB/connection")

const router = require('./Routes/Router')

const appMiddleware = require('./Middlewares/appMiddleware')


//create bckend application using express 
const pfserver = express()//creates express application

//use cors
pfserver.use(cors())
pfserver.use(express.json())//Returns middleware that only parses json 
pfserver.use(appMiddleware)
pfserver.use(router)
pfserver.use('/uploads',express.static('./uploads'))

//port creation
const PORT = 4000 || process.env.PORT

//server listening 
pfserver.listen(PORT, () => {
    console.log("listening on port " + PORT);
})

//localhost:4000 - res pfserver is started
pfserver.get('/', (req, res) => {
    res.send(`Starting Backend`)
})
