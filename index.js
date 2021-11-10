require("dotenv").config()
const express = require("express")
const server = express()
const path = require('path')
const morgan = require("morgan")
//const {PORT=4000} = process.env
const PORT = process.env.PORT||4000
// const PORT = process.env.SERVER_PORT||400


server.use(morgan('dev'))
server.use(express.json())

//express static for build files (can't get it to work)
server.use('/',express.static(path.join(__dirname,'./build')))

const apiRouter = require('./api')
server.use('/api',apiRouter)

const client = require("./db/client")
client.connect()

server.use((error,req,res,next)=>{
    console.error("SERVER ERROR: ",error)
    res.status(500).send({
        name: error.name,
        message: error.message
    })
})

//results in "NOT FOUND" message
//For any get routes that are not in /api, rely on ReactRouter to handle
server.get("*",(req,res,next)=>{
    res.sendFile(path.join(__dirname, "build", "index.js"))
})

server.listen(PORT,()=>{
    console.log("the server is up on port",PORT)
})