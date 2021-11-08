const express = require('express')
const usesRouter = express.Router()
const {getAllUses,getUsesByProductId} = require("../db")

//GET /api/uses
usesRouter.get("/", async (req,res,next)=>{
    try{
        const usesResponse = await getAllUses()
        //console.log("USES: ",usesResponse)
        res.send(usesResponse)
    }
    catch(error){
        console.log("ERROR-GETALLUSES",error)
        next(error)
    }
})

//GET /api/uses/productId/:productId
usesRouter.get("/productId/:productId",async (req,res,next)=>{
    try{
        const {productId}=req.params
        const usesResponse = await getUsesByProductId(productId)
        res.send(usesResponse)
    }
    catch(error){
        console.log("ERROR-GETUSESBYPRODUCTID",error)
        next(error)
    }
})

module.exports = usesRouter