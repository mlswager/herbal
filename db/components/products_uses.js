const client = require ('../client')

async function createProductsUses({productId,usesId}) {
    try{
        const {rows: [PU]}= await client.query(`
        INSERT INTO products_uses(
            "productId",
            "usesId"
        )
        VALUES ($1,$2)
        RETURNING * 
        `,[productId,usesId])
        return PU
    }
    catch(error){
        console.log('ERROR @ createProductUses DB FUNCTION')
        throw error
    }
}

module.exports = {
    createProductsUses,
}