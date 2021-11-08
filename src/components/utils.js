import axios from "axios"

const AddToCart = async (orderId,productId,quantity,size,productName,price)=>{
        try{
            //console.log("UTILS: orderId: ",orderId," productId: ",productId," quantity: ",quantity," size: ",size," name: ",productName)
            let duplicatecheck = false
            const getResponse = await axios.get(`/api/orders_products/order/${orderId}`)
            //console.log("getResponse: ",getResponse.data)

            getResponse.data.forEach(async function(element){
                //console.log("db size: ",element.size, " passes size: ",size)
                if(element.productId===productId && duplicatecheck===false && element.size === size){
                    duplicatecheck=true
                    let newQuantity = {quantity: Number(element.quantity)+Number(quantity)}
                    //console.log("element.quantity: ",element.quantity," quantity: ",quantity," newQuantity: ",newQuantity)
                    const addQuantity = await axios.patch(`/api/orders_products/quantity/${element.id}`,newQuantity)
                    //console.log("addQuantity",addQuantity)
                }
            })
            if(duplicatecheck===false){
                //console.log("duplicatecheck: ",duplicatecheck)
                let requiredParams = {
                    quantity:quantity,
                    size:size,
                    price:price
                }
                //console.log("requiredparams: ",requiredParams)
                const postResponse = await axios.post(`/api/orders_products/order/${orderId}/product/${productId}`,requiredParams)
                //console.log("added ",postResponse.data)
            }
        }
        catch(error){
            console.log("ERROR-addtocart",error)
            alert("There was an issue adding this item to your cart")
        }
}

const Checkout =async (orderId,userId)=>{
    try{
        //console.log("UTILS: orderId: ",orderId," userId",userId)
        const requiredParams = {status:"checkout"}
        const endCurrentOrder = await axios.patch(`/api/orders/${orderId}`,requiredParams)
        //console.log("updateCurrentOrder: ",endCurrentOrder)
        const startNewOrder = await axios.post(`/api/orders/users/${userId}`)
        //console.log("startNewOrder: ",startNewOrder.data.id)
        return startNewOrder.data.id
    }
    catch(error){
        console.log("ERROR-checkout",error)
        alert("There was an issue checking out")
    }
}

const RemoveFromCart = async (orderId,productId,productName)=>{
    try{
         //console.log("UTILS-orderId: ",orderId," productId: ",productId," productName: ",productName)
        // const requiredParams = {productId:productId}
        const getProductFromCart = await axios.get(`/api/orders_products/product/${productId}/order/${orderId}`)
        //console.log("getProductFromCart: ",getProductFromCart.data[0].id)
        const deleteProductFromCart = await axios.delete (`/api/orders_products/${getProductFromCart.data[0].id}`)
        return deleteProductFromCart
    }
    catch(error){
        console.log("ERROR-removefromcart",error)
        alert("There was an issue removing your item from the cart")
    }

}

export {AddToCart,Checkout,RemoveFromCart}