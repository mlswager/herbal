import React from "react";
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom"


const Home = (props)=>{
    return(
        <div id="home">
            {/* <div id="welcome-container">
                <h1 id="welcome">Welcome to Herbal</h1>
            </div> */}
            <img id="cover" src="https://healthylivingmarket.com/wp-content/uploads/2017/01/o-COOKING-WITH-HERBS-facebook.jpg"/>
            <Link to = "/products" id="home-products-button">meet the herbs</Link>
        </div>
    )
}

export default Home