import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
       <div className="nav">
        <div className="leftpanel flexcontainer">
           <h2>React Routing</h2>
        </div>
        <div className="rightpanel flexcontainer">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/image">Image</Link>
          <Link to="/counter">Counter</Link>
        </div>
        </div> 
    </div>
  )
}

export default Nav