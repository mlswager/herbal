const client = require('../client')

async function createOrdersProducts({orderId, productId, quantity,size,price}) {
    try{
        //let totalPrice = Number(quantity)*Number(price)
        //console.log("DBquantity: ",quantity)
        //console.log("DBprice: ",price)
        //console.log("DBtotalPrice: ",Number(totalPrice))
        const {rows: [OP]} = await client.query(`
        INSERT INTO orders_products(
            "orderId", 
            "productId", 
            quantity,
            size,
            "totalPrice"
        )
        VALUES($1,$2,$3,$4,$5)
        RETURNING *
        `,[orderId, productId, quantity,size,price])
        return OP

    } catch (error) {
        console.log('ERROR @ createOrdersProducts')
        throw error
    }
}

async function getOrdersProductsById(id){
    try{
        const {rows: [OP]} = await client.query(`
        SELECT * FROM orders_products
        WHERE id = $1
        `,[id])

        return OP
    } catch(error){
        console.log('ERROR @ getOrdersProductsById')
        throw error
    }
}

async function getOrdersProductsByOrdersId(id){
    try{
        const {rows: OP} = await client.query(`
        SELECT * FROM orders_products
        WHERE "orderId" = $1
        `,[id])
        return OP
    } catch(error){
        console.log('ERROR @ getProductsByOrdersId FUNCTION')
        throw error
    }
}

async function getOrdersProductsByProductId(productId,orderId){
    try{
        const {rows} = await client.query(`
        SELECT * FROM orders_products
        WHERE "productId" = $1
        AND "orderId"= $2
        `,[productId,orderId])

        return rows
    } catch(error){
        console.log('ERROR @ getProductsByProductId FUNCTION')
        throw error
    }
}

async function updateOrdersProductsQuantity(id,quantity){
    try{
        //console.log("dbId: ",id)
        //console.log("dbQuantity",quantity)
        //const setString = `quantity = ${quantity}`
        const {rows: updatedOrderProducts}=await client.query(`
        UPDATE orders_products
        SET quantity = $2
        WHERE id = $1
        RETURNING *
        `,[id,quantity])
        return updatedOrderProducts
    }
    catch(error) {
        console.log('ERROR @ updateOrdersProductsQuantity FUNCTION')
        throw error
    }
}

async function deleteOrdersProducts(id){
    try{
        const {rows: [ordersProducts]} = await client.query(`
        DELETE FROM orders_products
        WHERE id = $1
        RETURNING *
        `, [id])

        return ordersProducts
    } catch(error){
        console.log('ERROR @ deleteOrdersProduct')
        throw error
    }
}

module.exports = {
    createOrdersProducts,
    getOrdersProductsById,
    getOrdersProductsByOrdersId,
    updateOrdersProductsQuantity,
    getOrdersProductsByProductId,
    deleteOrdersProducts
}