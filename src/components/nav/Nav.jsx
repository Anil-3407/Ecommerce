import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div>
       <div className="nav">
        <div className="leftpanel flexcontainer">
           <h2>React Routing</h2>
        </div>
        <div className="rightpanel flexcontainer">
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Image</a>
          <a href="">Counter</a>
        </div>
        </div> 
    </div>
  )
}

export default Nav