import React,{ createContext,useState,useEffect } from 'react';
export const ProductsContext = createContext();

export default function ProductsContextProvider({children}){
    const [products,setProduct] = useState([])

    const removeFromCart = (productid) => {
        setProduct(products.filter(item=>item.id !== productid))
    }
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
        .catch(err=>console.log(err))
    },[])
    return <ProductsContext.Provider value={{setProduct,products,removeFromCart}}>{children}</ProductsContext.Provider>
}