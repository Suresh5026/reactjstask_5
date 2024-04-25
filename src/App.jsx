import { Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./assets/Components/Index"
import "./assets/CSS/style.css"




function App() {
  
  return (
    <>
    
    <div>
      <Link to={'/'}></Link>
      

    </div>
    
    <Routes >
    
      <Route Component={Index} path='/' />
      
    </Routes>
    
      
    </>
  )
}

export default App
