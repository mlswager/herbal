import { COMPLETIONSTATEMENT_TYPES } from "@babel/types";
import React, {useState} from "react";
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom"
import Login from "./login";
import Register from "./register";

const Nav = (props) => {
let {token,setToken,orderId,setOrderId,guestCart,setGuestCart,setProductId,setUser,user}=props
const[showLogin,setShowLogin]=useState("")
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")
const[passwordconfirm,setPasswordConfirm]=useState("")
const[email,setEmail]=useState("")

function logoutFunc(event){
  event.preventDefault()//fixed mistake here
  setToken("")
  localStorage.removeItem("token")
  setOrderId("")
  setUsername("")
  setPassword("")
  if(email){
      setEmail("")
  }
  if(passwordconfirm){
      setPasswordConfirm("")
  }
}
function loginHandle(event){
    event.preventDefault()
    setShowLogin("login")
}
    return (
        <div id="nav-bar">
        <div id="nav-pages">
            <Link to = "/products" id="prod-btn" className="nav-button linkto-styleA" onClick={()=>{setProductId("")}}>products</Link>
            <Link to = "/about" id="abt-btn" className="nav-button linkto-styleA" >about</Link>
        </div>
        <h1 id="site-name">herbal</h1>
        <div id="nav-account-items">
            <div id="nav-account-icon-container">
                <Link to = "/cart" className="material-icons md-48 md-dark" id="nav-account-icon">shopping_cart</Link>
            </div>
            {token ? <button className = "nav-account-login" onClick = {logoutFunc}>logout</button>:<button className="nav-account-login" onClick={loginHandle}>login</button>}
        </div>
        <Login classname="loginmodal"
            setToken={setToken}
            orderId={orderId}
            setOrderId={setOrderId}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            guestCart={guestCart}
            setGuestCart={setGuestCart}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setUser={setUser}
            user={user}
        />
        <Register classname="loginmodal"
            setToken={setToken}
            orderId={orderId}
            setOrderId={setOrderId}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            guestCart={guestCart}
            setGuestCart={setGuestCart}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            passwordconfirm={passwordconfirm}
            setPasswordConfirm={setPasswordConfirm}
            email={email}
            setEmail={setEmail}
            setUser={setUser}
            user={user}
        />
        </div>

    );
}
export default Nav
