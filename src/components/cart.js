import React,{useState,useEffect} from "react";
import axios from "axios"
import {Checkout,AddToCart,RemoveFromCart} from "./utils"

const Cart = (props) =>{
    const {token,orderId,setOrderId,productId,setProductId,guestCart,setGuestCart,user}=props
    const [orderProducts,setOrderProducts]=useState([])

    useEffect(()=>{
        const loadOrderProductsData = async()=>{
          console.log("---start to load data---")
          //console.log("orderId: ",orderId)
          const orderProductsResponse = await axios.get(`/api/products/order/${orderId}`)
          console.log("orderProductsResponse: ",orderProductsResponse.data)
          setOrderProducts(orderProductsResponse.data)
        }
        if(orderId){
          loadOrderProductsData()
        }
        else if(!orderId){
          //console.log("no orderId")
          setOrderProducts(guestCart)
        }
    },[orderId,productId,guestCart])
    //console.log("orderProducts: ",orderProducts)

    let totalCalc = 0

    const handleCheckout = async ()=>{
      if(orderProducts.length > 0){
        if(token){
        let newOrder=await Checkout(orderId,user.id)
        //console.log("newOrder: ",newOrder)
        setOrderId(newOrder)
        }
        else{
          const guestCheckoutOrder = await axios.post(`/api/orders/guestusers`)
          //console.log("guestOrderId: ",guestCheckoutOrder.data)
          //console.log("orderProducts: ",orderProducts)
          orderProducts.forEach(element=>{
            //onsole.log("CART: orderId: ",guestCheckoutOrder.data.id," productId: ",element.productId," quantity: ",element.quantity," size: ",element.size," name: ",element.name)
            AddToCart(guestCheckoutOrder.data.id,element.productId,element.quantity,element.size,element.name)
          })
          const requiredParams = {status:"checkout"}
          const endCurrentOrder = await axios.patch(`/api/orders/${guestCheckoutOrder.data.id}`,requiredParams)
          setGuestCart([])
          localStorage.removeItem("cart")
        }
        alert("You are checked out! Note: this is not a real e-commerce website. You have not actually purchased any items")
      }
      else{
        console.log("No Items in Cart")
        alert("Notice: There are no items in your cart")
      }
    }

    const handleRemove = async (elementproductId,elementproductName,elementSize,elementQuantity)=>{
      if(token){
        console.log("orderId: ",orderId," productId: ",elementproductId," productName: ",elementproductName)
        //setProductId(elementproductId)
        //console.log("STATE-productId: ",productId)
        let deleteProduct = await RemoveFromCart(orderId,elementproductId,elementproductName)
        //console.log("deletedItem: ",deleteProduct)
        setProductId(elementproductId)
        alert(`${elementproductName} has been removed from the cart`)
      }
      else{
        //console.log("guestCart: ",guestCart)
        //console.log("orderProducts: ",orderProducts)
        guestCart.forEach(element=>{
          if(element.productId===elementproductId && element.size===elementSize){
            //console.log("matchProductId: ",element.Id)
            //console.log("matchProductId: ",elementproductId)
            let editGuestCart=guestCart
            let findIndex=editGuestCart.indexOf(element)
            //console.log("findIndex:",findIndex)
            editGuestCart.splice(findIndex,1)
            //console.log("editGuestCart",editGuestCart)
            setGuestCart(editGuestCart)
            localStorage.setItem("cart",JSON.stringify(editGuestCart))
            setProductId(elementproductId)
          }
        })
      }
    }


    return(
        <div id = "cart">
          <h2 id="cart-title">your cart</h2>
          <div id="cart-screen">
            <div id="cart-items">
              {orderProducts.map(function(element,index){
                totalCalc = totalCalc+Number(element.price * element.quantity)
                  return(
                    <div key={index} className="cart-item">
                      <img src= {element.image} className="cart-item-image"/>
                      <div className="cart-item-info">
                         <p className="cart-item-name" name="item-1">{element.name}</p>
                        <p className="cart-item-size" name="item-1">{element.size}</p>
                        <p className="cart-item-quantity">qty: {element.quantity}</p>
                      </div>
                      <div className="cart-item-price-info">
                        <p className="cart-item-price">price: ${element.price * element.quantity}</p>
                        <button className="cart-item-button" onClick={()=>{handleRemove(element.productId,element.name,element.size,element.quantity)}}>Remove</button>
                      </div>
                    </div>
                  )
              })}
            </div>
            <div id="cart-checkout-container">
                <div id="cart-checkout">
                  <div id="cart-checkout-header">
                    <h3 id="cart-checkout-title">Cart Summary</h3>
                  </div>
                <p id="cart-checkout-subTotalPrice">sub-total: ${totalCalc}</p>
                <p id="cart-checkout-shippingPrice">estimated shipping: $7.95</p>
                <p id="cart-checkout-grandTotalPrice">Grand Total: ${totalCalc+7.95}</p>
                <button id="cart-checkout-button" type="submit" onClick={()=>{handleCheckout()}}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Cart