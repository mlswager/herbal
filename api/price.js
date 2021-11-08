const express = require('express')
const pricesRouter = express.Router()
const { getPriceByProductId,getAllPrices } = require('../db')

//GET /api/price
pricesRouter.get("/", async (req,res,next) =>{
    try{
        const pricesResponse = await getAllPrices()
        res.send(pricesResponse)
    } catch(error){
        console.error("ERROR-GETALLPRICES ", error)
        next(error)
    }
})

//GET /api/price/:productId
pricesRouter.get("/:productId", async (req,res,next)=>{
    try{
        const{productId}=req.params
        const pricesResponse = await getPriceByProductId(productId)
        res.send(pricesResponse)
    }
    catch(error){
        console.log("ERROR-GETPRICESBYPRODUCTID")
        next(error)
    }
})


module.exports = pricesRouter