import React,{useState,useEffect} from "react";
import axios from "axios";
import {AddToCart} from "./utils"

const SingleProduct = (props) => {
    const {token,orderId,productId,setProductId,guestCart,setGuestCart,setUsesFilter,setUseToggle}=props
    const [product,setProduct]=useState([])
    const [productPrice,setProductPrice]=useState([])
    const [quantity,setQuantity]=useState(1)
    const [size,setSize]=useState("")
    const [price,setPrice]=useState(0)
    const [uses,setUses]=useState([])

    const bannerimg={
        backgroundImage: 'url('+product.banner+')'
    }

    useEffect(()=>{
        //console.log(productId)
        const loadProductsData = async()=>{
            if(productId){
            //console.log("---start to load data---")
            const productResponse = await axios.get(`/api/products/${productId}`)
            //console.log("productResponse: ",productResponse.data)
            setProduct(productResponse.data)
            }
          }
        const loadProductsPrices = async()=>{
            if(productId){
            const priceResponse = await axios.get(`/api/price/${productId}`)
            //console.log("productPrices: ",priceResponse.data)
            setProductPrice(priceResponse.data)
            setPrice(priceResponse.data[0].price)
            setSize(priceResponse.data[0].size)
            }
        }
        const loadUses = async ()=>{
            if(productId){
            const usesResponse = await axios.get(`/api/uses/productId/${productId}`)
            
            setUses(usesResponse.data.sort())
            }
        }
        
        loadProductsData()
        loadProductsPrices()
        loadUses()
        setQuantity(1)
    },[productId])
    //console.log("product: ",product)
    //console.log("uses: ",uses)

    const handleAddToCart = (productId,productName)=>{
        //console.log("---start add to cart---")
        //console.log("quantity: ",quantity)
        setProductId(productId)
        if(size){
            if(token){
            AddToCart(orderId,productId,quantity,size,productName,price)
            alert(`${quantity} ${product.name} has been added to the cart`)
            }
            else{
                try{
                    let duplicatecheck = false
                    setProductId(productId)
                    let cartItem = guestCart
                    //console.log("cartItem: ",cartItem)
                    cartItem.forEach(function(element){
                        if(element.productId===productId && element.size===size && duplicatecheck===false){
                            duplicatecheck=true
                            //console.log("originalquantity: ",element.quantity)
                            let update = Number(element.quantity)+Number(quantity)
                            //console.log("update: ",update)
                            element.quantity = update
                            //console.log("guest cart: ",cartItem)
                            setGuestCart(cartItem)
                            localStorage.setItem("cart",JSON.stringify(cartItem))
                        }
                    })
                    if(duplicatecheck===false){
                        cartItem.push({
                            "description":product.description,
                            // "id":product.id,
                            "productId":product.id,
                            "image":product.image,
                            "name":product.name,
                            "price":price,
                            "sciname":product.sciname,
                            "size":size,
                            "quantity":quantity,
                            "totalPrice":price*quantity
                        })
                        setGuestCart(cartItem)
                        //console.log("guestCart: ",cartItem)
                        localStorage.setItem("cart",JSON.stringify(cartItem))
                    }
                    alert(`${quantity} ${product.name} has been added to the cart`)
                    setProductId("")
                }
                catch(error){
                    console.log("ERROR-addtoguestcart",error)
                alert("There was an issue adding this item to your guest cart")
                }
            }
            //console.log("---end add to cart---")
        }
        else{
            alert("Please choose a valid size")
        }
    }

    const sizePriceHandle = (size,price)=>{
        setSize(size)
        setPrice(price)
    }

    const handleUse = (useId)=>{
        //console.log("selectUse: ",useId)
        setUsesFilter(useId)
        setUseToggle(true)
        setProductId("")
    }

    const handleClose = ()=>{
        setProductId("")
        setSize("")
        setPrice(0)
        setQuantity(1)
    }

    if(!productId){//to show or not show modal
        return null
    }

    return (
        <div className="modal-sp">
            <div className="modal-sp-content">
                {/* <div className="modal-sp-header" style={bannerimg}> */}
                <div className="modal-sp-header-backup">
                    {/* <button onClick={()=>{handleClose()}}>close</button> */}
                    <i className="material-icons md-48 md-dark" id="modal-sp-icon" onClick={()=>{handleClose()}}>close</i>
                </div>
                <div className="modal-sp-body">
                    <img className="modal-sp-image" src={product.image} alt={product.name}/>
                    <div className="modal-sp-info">
                    <h3 className="modal-sp-title">{product.name}</h3>
                    
                    {/* <img className="modal-sp-image" src={product.image} alt={product.name}/> */}
                    <p className="item-description1">{product.description}</p>
                    </div>
                    <div className="modal-sp-selection">
                        <div className="modal-sp-selection-tools">
                            <div className="modal-sp-radio">
                            {productPrice.map(function(elementPP,index){
                                return(
                                    <div key={elementPP.id} className="item-sizes">
                                        <input className = "item-radio" type="radio" name="sizes" defaultChecked={index === 0} onClick={function(event){sizePriceHandle(elementPP.size,elementPP.price)}}></input>
                                        <label className = "item-radio-label">{elementPP.size}</label>
                                    </div>    
                                )
                            })}
                            </div>
                            <input className = "item-spinner" type="number" min="1" max ="10" defaultValue="1" size="2" onChange={function(event){setQuantity(event.target.value)}}></input>
                        </div>
                        <p className="item-price"><span className="fact-name">Price:</span><span>{price*quantity}</span></p>
                        <button className="modal-sp-add-item" onClick = {()=>{handleAddToCart(product.id,product.name)}}>add to cart</button>
                    </div>
                </div>
                <div className="modal-sp-uses">
                    <h2>Uses</h2>
                    <p>click below to filter products by use.</p>
                        {uses.map(function(elementU,index){
                            //console.log("displayedUses: ",elementU)
                            return(
                                <button key={elementU.id} onClick = {()=>{handleUse(elementU.usesId)}}>{elementU.use}</button>
                            )
                        })}
                    </div>
            </div> 
        </div>

    )
}

    export default SingleProduct