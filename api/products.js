const express = require('express')
const productsRouter = express.Router()
const {getAllProducts,getProductsByUse,getProductById,getProductsByOrderId} = require("../db")

//GET /api/products
productsRouter.get("/", async (req,res,next)=>{
    try{
        const productsResponse = await getAllProducts()
        //console.log("PRODUCTS: ",productsResponse)
        res.send(productsResponse)
    }
    catch(error){
        console.log("ERROR-GETALLPRODUCTS",error)
        next(error)
    }
})

//GET /api/products/uses?..params
/*input start
const params = URLSearchParams()
params.append('usesId',1)
params.append('usesId',1)
axios.get(/api/products/uses/,{params:params})
input end */

productsRouter.get("/uses",async (req,res,next)=>{
    try{
        const {usesId} = req.query
        //console.log("usesId: ",usesId)
        const productsResponse = await getProductsByUse(usesId)
        res.send(productsResponse)
    }
    catch(error){
        console.log("ERROR-GETALLPRODUCTSBYUSESID",error)
        next(error)
    }
})

// GET /api/products/:productId
productsRouter.get("/:id", async (req,res,next)=>{
    try{
        //console.log("starting get product")
        const {id} = req.params
        //console.log("productId: ",id)
        const product = await getProductById(id)
        //console.log("product: ",product)
        res.send(product)
    }
    catch(error){
        console.error("ERROR-PRODUCTBYID",error)
        next(error)
    }
})

//GET /api/products/order:orderId
productsRouter.get("/order/:orderId", async (req,res,next)=>{
    //console.log("---starting test---")
    try{
        const {orderId} = req.params
        //console.log("orderId: ",orderId)
        const test = await getProductsByOrderId(orderId)
        //console.log("test: ",test)
        res.send(test)
    }
    catch(error){
        console.error("ERROR-TESTORDER",error)
        next(error)
    }
})




module.exports = productsRouter