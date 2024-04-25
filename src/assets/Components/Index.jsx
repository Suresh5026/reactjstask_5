

import ProductsContextProvider from "../Context/ProductsContext";
import Home from "./Home";



export default function Index(){
    
    return (
        <>
        
        <ProductsContextProvider>
           <Home />
        </ProductsContextProvider>
        
        </>
    )
}
    