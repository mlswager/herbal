import React,{useState,useEffect} from "react";
import axios from "axios"
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom"
import SingleProduct from "./singleproduct";

const AllProducts = (props)=>{
    const {token,productId,setProductId,usesFilter,setUsesFilter,orderId,guestCart,setGuestCart}=props

    const[products,setProducts]=useState([])
    const[uses,setUses]=useState([])
    const[useToggle,setUseToggle]=useState(false)

    useEffect(()=>{
        const loadProductsData = async()=>{
            const allProductsResponse = await axios.get("/api/products")
            setProducts(allProductsResponse.data.sort(function(a,b){//sort alphabetically by name
                let nameA=a.name
                let nameB=b.name
                if(nameA < nameB){
                    return -1
                }
                if(nameA > nameB){
                    return 1
                }

                return 0
            }))
        }
        const loadProductsDataFiltered = async()=>{
            const params = new URLSearchParams()
            params.append('usesId',usesFilter)
            //console.log("params: ",params)
            const allProductsResponse = await axios.get("/api/products/uses/",{params:params})
            setProducts(allProductsResponse.data.sort(function(a,b){//sort alphabetically by name
                let nameA=a.name
                let nameB=b.name
                if(nameA < nameB){
                    return -1
                }
                if(nameA > nameB){
                    return 1
                }

                return 0
            }))
        }
        const loadUsesData = async ()=>{
            const allUsesResponse = await axios.get("/api/uses")
            setUses(allUsesResponse.data.sort(function(a,b){//sort alphabetically by name
                let useA=a.use
                let useB=b.use
                if(useA < useB){
                    return -1
                }
                if(useA > useB){
                    return 1
                }

                return 0
            }))
        }
        //console.log("usesFilter: ",usesFilter)
        loadUsesData()
        if(usesFilter.length<1){
          loadProductsData()
        }
        else{
            loadProductsDataFiltered()
        }
    },[usesFilter])
    //console.log("products: ",products)
    //console.log("selectedUse: ",usesFilter)

    const singleProductFunc = (goToSingleProduct,goToSingleProductUseSelected)=>{
        //console.log("selectedProduct: ",goToSingleProduct)
        //console.log("selectedProduct2: ",goToSingleProductUseSelected)
        //console.log("use?: ",usesFilter)
        if(usesFilter.length<1){
            setProductId(goToSingleProduct)
        }
        else{
            setProductId(goToSingleProductUseSelected)
        }
    }

    let allProductsStyle = {

    }
    if(productId){
        allProductsStyle = {
            "height":"100vh",
            "position":"fixed",
            "overflowY": "none",
        }
    }


    return(
        <div id="allProductsPage" style={allProductsStyle}>
            <SingleProduct
                token={token}
                orderId={orderId}
                productId={productId}
                setProductId={setProductId}
                guestCart={guestCart}
                setGuestCart={setGuestCart}
                setUsesFilter={setUsesFilter}
                setUseToggle={setUseToggle}
            />
            <div id="use-toggle">
                {useToggle ? <button id = "use-toggle-button-hide"  onClick={()=>{setUseToggle(!useToggle)}}>hide uses</button>:<button id = "use-toggle-button" onClick={()=>{setUseToggle(!useToggle)}}>select use</button>}
            </div>
            {useToggle ?
            <div className="uses">
            <div className = "uses-mapped">
                {uses.map(function(elementU){
                    if(usesFilter===elementU.id){
                        return <p key={elementU.id} className="use-clicked" onClick={()=>{setUsesFilter([])}}>{elementU.use}</p>
                    }
                    else{
                        return <p key={elementU.id} className="use" onClick={()=>{setUsesFilter(elementU.id)}}>{elementU.use}</p>
                    }
                    
                    return(
                            <p key={elementU.id} className="use" onClick={()=>{setUsesFilter(elementU.id)}}>{elementU.use}</p>
                    )
                })}
            </div>
            </div>:null
            }
            <div className="products">
                {products.map(function(elementP){
                    // console.log("elementP: ",elementP)
                    return(
                        <div key={elementP.id} className = "product">
                            <div className="product-image-container">
                            <img className="product-image" src={elementP.image} alt={elementP.name} onClick={()=>{singleProductFunc(elementP.id,elementP.productId)}}/>
                            </div>
                            <h2 className="product-name">{elementP.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts