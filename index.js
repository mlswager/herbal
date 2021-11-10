require("dotenv").config()
const express = require("express")
const server = express()
const morgan = require("morgan")
const {client} = require("./db")
//const {PORT=4000} = process.env
const PORT = process.env.PORT||4000
// const PORT = process.env.SERVER_PORT||400

client.connect()

server.use(morgan('dev'))
server.use(express.json())

//express static for build files (can't get it to work)
// server.use('/',express.static(path.join(_dirname,'../build')))

const apiRouter = require('./api')
server.use('/api',apiRouter)



server.use((error,req,res,next)=>{
    console.error("SERVER ERROR: ",error)
    res.status(500).send({
        name: error.name,
        message: error.message
    })
})

server.listen(PORT,()=>{
    console.log("the server is up on port",PORT)
})