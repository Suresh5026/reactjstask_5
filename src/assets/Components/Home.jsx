import React, {  useContext, useEffect, useState } from "react";
import  { ProductsContext } from "../Context/ProductsContext";
import Accordian from "./Accordian";




export default function Home(){
    
    const { products=[], setProduct,removeFromCart } = useContext(ProductsContext)
    
    const [total,setTotal] =useState()
    const [shipping] = useState(0);
    
    useEffect(()=>{
      let total=0
      for(let x of products){
        total += (x.quantity || 0) * x.price
      }
      if (shipping > 0) {
        total += shipping;
      }
     setTotal(total)
     

    },[products])
   
    return (
        <>
        <div className="container">
        <div className="cart-items-container py-5 divider">
        <div className="row mb-3">
            <div className="row justify-content-center">
                {products.map((product)=>(
                    <div  className="row divider ele" key={product.id}>
                        <div className="col-6">
                            <div className="row">
                            <div className="col-3">
                              <img className="pro-img" src={product.images} alt="image" />
                            </div>
                            <div className="col-9">
                                <h5 className="mb-5">{product.title}</h5>
                                <Accordian options={[
                                  { title : 'Details & Care', 
                                desc : product.description},
                                { title : 'Sustainability',
                                desc: `Brand : ${product.brand} , Rating : ${product.rating}`  }]}/>
                           
                            </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end">
                                <select name="stock" id="cart" onChange={(e)=>{
                                    setProduct(products.map((p)=>
                                    {
                                        if(p.id===product.id){
                                            p.quantity = Number(e.target.value);
                                        }
                                        return p
                                    } ))}}>
                                    {[...Array(product.stock + 1).keys()].map((stock, index) => (
                                        <option key={index} value={stock}>{stock}</option>
                                        ))}
                                </select>
                                <div className="col-6 justify-content-end">
                                <p  className="d-flex justify-content-end">Price : $ {product.price*product.quantity}</p>
                                </div>
                               
                                 
                            </div>
                            <div className="row"></div>
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn justify-content-end" type="button" style={{color:"red"}} onClick={()=>removeFromCart(product.id)}>REMOVE</button>
                            </div>
                            </div>
                        </div>
                            
                            
                            
                                
                                
                                <div>
                                    
                                </div>
                        
                           
                        
                    
                </div>
                

                ))
                
            }
            
            </div>
            
        </div>
        
            
        
           
        

        
        </div>
        <div className="py-5 divider">
            <div className="row">
            <div className="col-6">SUBTOTAL</div>
            <div className="col-6 d-flex justify-content-end"><b>{total}</b></div> 
            </div>
            </div>
            <div className="row">
          <div className="col-6 mb-3">SHIPPING</div>
          <div className="col-6 d-flex justify-content-end">
            <b>{shipping > 0 ? `$${shipping}` : "FREE"}</b>
          </div>
        </div>    
        <div className="py-5 divider">
        <div className="row">
          <div className="col-6">TOTAL:</div>
          <div className="col-6 d-flex justify-content-end">
            <b>${total}</b>
          </div>
        </div>
      </div>
    

        </div>
            
       
        
    </>
  )
}
    