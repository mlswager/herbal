import React,{useState} from "react";
import axios from "axios"
import {AddToCart} from "./utils"
import ReactModal from "react-modal";

const Login = (props) => {
    let {setToken,setOrderId,showLogin,setShowLogin,guestCart,setGuestCart,username,setUsername,password,setPassword}=props


    async function login(){
        let user = {"username":username,"password":password}
        try{
            console.log("user: ",user)
            const loginResponse = await axios.post("/api/users/login",user)
            console.log("loginResponse",loginResponse)
            //console.log("userId: ",loginResponse.data.user.id)
            setToken(loginResponse.data.token)
            localStorage.setItem("token",loginResponse.data.token)
            const gotOrderId = await axios.get(`/api/orders/users/${loginResponse.data.user.id}`)
            setOrderId(gotOrderId.data[0].id)
            if(guestCart.length>0){
                if(confirm("You have previously saved items in your cart. Would you like to merge your new items with the previously saved items in your cart?")){
                    console.log("merge")
                    guestCart.forEach(element => {
                        //console.log("orderId: ",gotOrderId.data[0].id," productId: ",element.id," quantity: ",element.quantity," size: ",element.size," name: ",element.name)
                        //console.log("guestCart",element)
                        AddToCart(gotOrderId.data[0].id,element.id,element.quantity,element.size,element.name)
                    })
                    setGuestCart([])
                    localStorage.removeItem("cart")
                }
                else{
                    setGuestCart([])
                    localStorage.removeItem("cart")
                }
            }
            setShowLogin("")
            alert("You are logged in!")
        }
        catch(error){
            console.log("ERROR-login",error)
            alert("There was an issue with your login attempt")
        }
    }
    function handleSubmit(event){
        event.preventDefault()//forgot this the first time
        login()
    }

    function handleClose(){
        setShowLogin("")
        setUsername("")
        setPassword("")
    }

    if(showLogin !=="login"){//to show or not show modal
        return null
    }

    return (
        <div className="modal_overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Login</h3>
                    {/* <button className="modal-button" type="button" onClick={()=>{setShowLogin("")}}>close</button> */}
                    <i className="material-icons md-48 md-dark" id="login-close-icon" onClick={()=>{handleClose()}}>close</i>
                </div>
                <div className="modal-body">
                    <form id="modal-form" onSubmit={handleSubmit}>
                        <div>
                            <label className="modal-label"><p className="modal-text">Username</p></label>
                            <input type="text" placeholder="username" name="uname" value = {username} onChange={function(event){setUsername(event.target.value)}} required/>
                        </div>
                        <div>
                            <label className="modal-label"><p className="modal-text">Password</p></label>
                            <input type="password" placeholder="password" name="psw" value = {password} onChange={function(event){setPassword(event.target.value)}} required/>
                        </div>
                        <div className="modal-buttons">
                            <button className="modal-button" type="submit">login</button>
                        </div>
                    </form>
                    <div className="modal-end">
                        <p className="login-text">Not a user? </p>
                        <button className="modal-link" onClick={()=>{setShowLogin("register")}}>click here to register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
    export default Login
