const client = require ('../client')

async function createUse({use}) {
    try{
        const {rows: [useFor]}= await client.query(`
        INSERT INTO uses(
            use
        )
        VALUES ($1)
        RETURNING * 
        `,[use])
        return useFor
    }
    catch(error){
        console.log('ERROR @ createUses DB FUNCTION')
        throw error
    }
}

async function getAllUses(){
    try{
        const {rows:uses} = await client.query(`
        SELECT * FROM uses
        `)
  return uses
    }
    catch(error){
        console.log("ERROR @ getAllUses FUNCTION")
        throw error
    }
}

async function getUsesByProductId(productId){
    try{
        const {rows:uses} = await client.query(`
        SELECT * FROM USES
        JOIN products_uses on uses.id = "usesId"
        WHERE "productId" = $1
        `,[productId])
        return uses
    }
    catch(error){
        console.log("ERROR @ getAllUsesByProductId FUNCTION")
        throw(error)
    }
}

module.exports = {
    createUse,
    getAllUses,
    getUsesByProductId
}