const client = require ('../client')

async function createOrder({ usersId,status }) {
    try{
        const {rows: [order]}= await client.query(`
        INSERT INTO orders(
            "usersId",
            current_status
        )
        VALUES ($1,$2)
        RETURNING *
        `,[usersId,status])
        return order
    }
    catch(error){
        console.log('ERROR @ createOrder DB FUNCTION')
        throw error
    }
}

async function getAllOrders(){
    try{
        const {rows: orders} = await client.query(`
        SELECT * FROM orders
        JOIN users ON "usersId" = users.id`)
        return orders
    } catch(error){
        console.log('ERROR @ getAllOrders FUNCTION')
        throw error
    }
}

async function getOrderById(id){
    try{
        const {rows: [order]} = await client.query(`
        SELECT * FROM orders
        WHERE id = $1
        `, [id])
        return order

    } catch(error){
        console.log('ERROR getOrderByID FUNCTION')
        throw error
    } 
}

async function getOrderIdByUserId(userId,status){
    try{
        //console.log("status: ",status)
        const{rows: orderId} = await client.query(`
        SELECT id FROM orders
        WHERE "usersId" = $1 AND current_status = $2
        `,[userId,status])
        return orderId
    }
    catch(error){
        console.log('ERROR @ getOrderIdsByUserId FUNCTION')
        throw error
    }
}

async function updateOrder(id,status){
    try{
        const{rows:updateOrderId} = await client.query(`
        UPDATE orders
        SET current_status = $2
        WHERE id = $1
        RETURNING *
        `,[id,status])
        return updateOrderId
    }
    catch(error){
        console.log('ERROR @ updateOrder FUNCTION')
        throw error
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderIdByUserId,
    updateOrder
}