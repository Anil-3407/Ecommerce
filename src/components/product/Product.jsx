import React from 'react'
import "./Product.css"
import { Link ,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <h2 style={{color:"green",textAlign:"center"}}>This Product Component</h2>
       
      <div className="productContainer">
        <div className="linkContainer">
          <Link style={{color:"white",textDecoration:"none"}} to="men's">Men's Cloth</Link>
          <Link style={{color:"white",textDecoration:"none"}} to="women's">Women's Cloth</Link>
          <Link style={{color:"white",textDecoration:"none"}} to="jewellery">Jewellery</Link>
          <Link style={{color:"white",textDecoration:"none"}} to="electronics">Electronics</Link>
        </div>
        <div className="componentContainer">
        <Outlet/>
        </div>
      </div>
        
    </div>
  )
}

export default Product