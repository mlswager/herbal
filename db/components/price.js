const client = require ('../client')

async function createPrice({ productId,size,price }) {
    try{
        //console.log("productId: ",productId," size: ",size," price: ",price)
        const {rows: [priceResponse]}= await client.query(`
        INSERT INTO price(
            "productId",
            size,
            price
        )
        VALUES ($1,$2,$3)
        RETURNING *
        `,[productId,size,price])
        //console.log("priceResponse: ",priceResponse)
        return priceResponse
    }
    catch(error){
        console.log('ERROR @ createPrice DB FUNCTION')
        throw error
    }
}

async function getAllPrices(){
    try{
        const {rows: prices} = await client.query(`
        SELECT * FROM price
        `)
        return prices
    }
    catch(error){
        console.log("'ERROR getAllPrices")
        throw(error)
    }
}

async function getPriceByProductId(productId){
    try{
        const {rows:prices} = await client.query(`
        SELECT * FROM price
        WHERE "productId" = $1
        `,[productId])
        return prices
    }
    catch(error){
        console.log('ERROR getPriceByProductId')
        throw(error)
    }
}

module.exports = {
    createPrice,
    getPriceByProductId,
    getAllPrices
}