const client = require ('../client')

async function createProducts({ name, sciname, type, description, image,banner}) {
    try{
        const {rows: [product]}= await client.query(`
        INSERT INTO products(
            name,
            sciname,
            type,
            description,
            image,
            banner
        )
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *
        `,[name, sciname, type, description, image, banner])
        return product
    }
    catch(error){
        console.log('ERROR @ createProduct DB FUNCTION')
        throw error
    }
}

async function getAllProducts(){
    try{
        const {rows:products} = await client.query(`
        SELECT * FROM products
        `)
  return products
    }
    catch(error){
        console.log("ERROR @ getAllProduct FUNCTION")
        throw error
    }
}

async function getProductsByUse(usesId){
    try{
        let useId=[usesId]
        //console.log("DB-usesId2:",usesId)
        //console.log("DB-usesId2:",useId)
        let string = ""
        if(useId.length>1){
        usesId.forEach(element=>string = string+element+",")
        string = "("+string.slice(0,string.length-1)+")"
        //console.log("string: ",string)
        }
        else{
            string="("+usesId+")"
        }
        //console.log("string: ",string)

        const {rows: products}=await client.query(`
        SELECT * FROM products
        JOIN products_uses on products.id = "productId"
        WHERE "usesId" IN ${string}
        `)
        //console.log("DB-products: ",products)
        return products
    }
    catch(error){
        console.log("Error @ getProductsByUse")
        throw(error)
    }

}

async function getProductById(id) {
    try{
        const {rows: [product]} = await client.query(`
        SELECT * FROM products
        WHERE id = $1
        `, [id])
        return product 
    } catch(error) {
        console.log('ERROR @ getProductsById FUNCTION')
        throw error
    }
}

async function getProductsByOrderId(orderId){
    try{
        //console.log("orderId: ",orderId)
        const {rows:products}=await client.query(`
        SELECT * FROM products
        JOIN orders_products ON products.id = "productId"
        WHERE "orderId" = $1
        `,[orderId])
        return products
    }
    catch(error){
        console.log('ERROR @ getProductByOrderId FUNCTION')
        throw error
    }
}



module.exports = {
    createProducts,
    getAllProducts,
    getProductsByUse,
    getProductById,
    getProductsByOrderId
}