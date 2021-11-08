const express = require('express')
const apiRouter = express.Router()
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env
const {getUserById}=require('../db')

//setting up user check
apiRouter.use(async (req,res,next)=>{
    const prefix = "Bearer "
    const auth = req.header("Authorization")
    //console.log("auth: ",auth)

    if(!auth){ //if there is no auth in the header then skip
        next()
    }
    else if(auth.startsWith(prefix)){ //if auth starts with "Bearer "
        const token = auth.slice(prefix.length) //slice off "Bearer " which should leave us with a token
        //console.log("token: ",token)
        try{
            const {id} = jwt.verify(token, JWT_SECRET) //creates id which uses jwt verify to get the user id from the token
            if(id){ //if id is truthy than store the results of getUserById for the id in req.user
                req.user = await getUserById(id)
                next()
            }
        }
        catch({name,message}){
            next({name,message})
        }
    }
    else{
        next({
            name: "Authorization Header error",
            message: "The authorization Header must start with Bearer"
        })
    }
})

//GET /api/health
apiRouter.get("/health", (req,res,next)=>{
    try{ 
        console.log("everything is healthy")
        res.send ({message:"---healthy---"})
    }
    catch(error){
        next(error)
        console.log("---not healthy---")
    }
})

const orders_productsRouter = require("./orders_products")
apiRouter.use("/orders_products",orders_productsRouter)

const ordersRouter = require("./orders")
apiRouter.use("/orders",ordersRouter)

const products_usesRouter = require("./products_uses")
apiRouter.use("/products_uses",products_usesRouter)

const productsRouter = require("./products")
apiRouter.use("/products",productsRouter)

const usersRouter = require("./users")
apiRouter.use("/users",usersRouter)

const usesRouter = require("./uses")
apiRouter.use("/uses",usesRouter)

const pricesRouter = require("./price")
apiRouter.use("/price",pricesRouter)

module.exports =apiRouter