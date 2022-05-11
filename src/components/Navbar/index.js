import React from 'react'
import "./style.css"

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="logo">
         Meals React App
       </div>
       
       <div className="menu">
           <button className="btn">Home</button>
           <button className="btn">Categories</button>
           <button className="btn">Random</button>

       </div>
      </div>
  )
}

export default Navbar