import axios from "axios";
import React, { useState } from "react";
import {AddToCart} from "./utils"
import ReactModal from "react-modal";


const Register = (props) => {
    const{setToken,setOrderId,showLogin,setShowLogin,guestCart,setGuestCart,username,setUsername,password,setPassword,passwordconfirm,setPasswordConfirm,email,setEmail,setUser,user}=props
    

    async function register(){
        let registerUser = {"username":username,"password":password,"email":email}
        let registerOrderId = {}
        try{
            if(password === passwordconfirm){
                const registrationResponse = await axios.post("/api/users/register",registerUser)
                setToken(registrationResponse.data.token)
                console.log("userId: ",registrationResponse.data.user)
                if(registrationResponse.data.user){
                    setUser(registrationResponse.data.user)
                }
                console.log("register user: ",user)
                localStorage.setItem("token",registrationResponse.data.token)
                const newOrder = await axios.post(`/api/orders/users/${registrationResponse.data.user.id}`)
                //console.log ("newOrder: ",newOrder.data)
                registerOrderId = newOrder.data.id
                if(guestCart.length>0){
                    if(confirm("You have previously saved items in your cart. Would you like to merge your new items with the previously saved items in your cart?")){
                        //console.log("merge")
                        guestCart.forEach(element => {
                            //console.log("orderId: ",newOrder.data.id," productId: ",element.productId," quantity: ",element.quantity," size: ",element.size," name: ",element.name)
                            //console.log("guestCart",element)
                            AddToCart(newOrder.data.id,element.productId,element.quantity,element.size,element.name,element.totalPrice)
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
                alert("You registered and logged in!")
            }
            else{
                console.log(console.log("ERROR-password mismatch"))
                alert("Please reconfirm your password.")
            }

        }
        catch(error){
            console.log("ERROR-registration",error)
            alert("There was an issue with your registration attempt")
        }
        if (registerOrderId){
            setOrderId(registerOrderId)
        }
    }
    function handleSubmit(event){
        event.preventDefault()//forgot this the first time
        register()
        setUsername("")
        setPassword("")
        setEmail("")
    }

    function handleClose(){
        setShowLogin("")
        setEmail("")
        setUsername("")
        setPassword("")
        setPasswordConfirm("")
    }

    if(showLogin !=="register"){//to show or not show modal
        return null
    }

    return (
        <div className="modal_overlay">
            <div className="modal-content">
                <div className="modal-header">
                     <h3 className="modal-title">Register</h3>
                     {/* <button className="modal-button" type="button" onClick={()=>{setShowLogin("")}}>close</button> */}
                     <i className="material-icons md-48 md-dark" id="login-close-icon" onClick={()=>{handleClose()}}>close</i>
                </div>
                <div className="modal-body">
                    <form id="modal-form" onSubmit={handleSubmit}>
                        <div>
                            <label className="modal-label"><p>Email</p></label>
                            <input type="email" placeholder="Enter Email" name="email" value = {email} onChange={function(event){setEmail(event.target.value)}} required/>
                        </div>
                        <div>
                        <label className="modal-label"><p className="modal-text">Username</p></label>
                        <input type="text" placeholder="username" name="uname" value = {username} onChange={function(event){setUsername(event.target.value)}} required/>
                        </div>
                        <div>
                        <label className="modal-label"><p className="modal-text">Password</p></label>
                        <input type="password" placeholder="password" name="psw" value = {password} onChange={function(event){setPassword(event.target.value)}} required/>
                        </div>
                        <div>
                        <label className="modal-label"><p>Confirm Password</p></label>
                        <input type="password" placeholder="confirm password" name="psw" value = {passwordconfirm} onChange={function(event){setPasswordConfirm(event.target.value)}} required/>
                        </div>
                        <div className="modal-buttons">
                            <button className="modal-button" type="submit">register</button>
                        </div>
                    </form>
                    <div className="modal-end">
                        <p className="login-text">Already registered? </p>
                        <button className="modal-link" onClick={()=>{setShowLogin("login")}}>click here to log in</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register