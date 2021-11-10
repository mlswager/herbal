import axios from 'axios'
import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route} from "react-router-dom"
/*---import API functions---*/
import AllProducts from './components/allproducts'
import Nav from './components/nav'
import Cart from './components/cart'
import About from './components/about'
import Home from './components/home'


const App = ()=>{
    const [token,setToken]=useState("")
    const [user,setUser]=useState("")
    const [orderId,setOrderId]=useState("")
    const [productId,setProductId]=useState("")
    const [usesFilter,setUsesFilter]=useState([])
    const [guestCart,setGuestCart]=useState([])

    useEffect(()=>{
      const getState = async()=>{
          //console.log("token: ",localStorage.getItem("token"))
          const gotUser = await axios.get(`/api/users/me`,{
              headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
          })
          //console.log("gotUser: ",gotUser.data)
          setUser(gotUser.data)
          const gotOrderId = await axios.get(`/api/orders/users/${gotUser.data.id}`)
          //console.log("gotOrderId: ",gotOrderId.data[0].id)
          //console.log("reset orderId: ",gotOrderId.data[0].id)
          setOrderId(gotOrderId.data[0].id)
      }
      if (localStorage.getItem("token")){
          //console.log("TOKEN YES")
          getState()
          setToken(localStorage.getItem("token"))
      }//if token is in local storage get the token from local storage and set to token then set user to results of getUser
      else{
          setToken("")
      }
      if (localStorage.getItem("cart")){
        //console.log("YES GUEST IN LOCAL STORAGE")
        setGuestCart(JSON.parse(localStorage.getItem("cart")))
        //console.log("cart from local storage: ",guestCart)
      }
      else{
        //console.log("NO GUEST IN LOCAL STORAGE")
        setGuestCart([])
      }

  },[])

  //console.log("state user:",user)
  //console.log("state orderId: ",orderId)

return <div id="app">
    <Router>
      <Nav
        token={token}
        setToken={setToken}
        orderId={orderId}
        setOrderId={setOrderId}
        guestCart={guestCart}
        setGuestCart={setGuestCart}
        setProductId={setProductId}
      />
      <Route //products page path
        path="/products"
        render={(renderprops) => 
          <AllProducts
            {...renderprops}
            token={token}
            productId={productId}
            setProductId={setProductId}
            usesFilter={usesFilter}
            setUsesFilter = {setUsesFilter}
            orderId={orderId}
            guestCart={guestCart}
            setGuestCart={setGuestCart}
          />}
      />
      <Route //cart page path
        path="/cart"
        render={(renderprops) => 
          <Cart
            {...renderprops}
            token={token}
            productId={productId}
            setProductId={setProductId}
            orderId={orderId}
            setOrderId={setOrderId}
            guestCart={guestCart}
            setGuestCart={setGuestCart}
            user={user}
          />}
        />
        <Route //about page path
        path="/about"
        render={(renderprops) => 
          <About
            {...renderprops}
          />}
        />
        <Route //about page path
        exact path="/"
        render={() => 
          <Home/>}
        />
    </Router>
</div>
}

ReactDOM.render(<App/>,document.getElementById('app'))