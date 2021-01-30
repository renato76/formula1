import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <div className="fa-bars" >
        <FaBars   
          onClick={() => setShowMenu(!showMenu)}
        
        />
      </div>
      <div className="nav-links">
        <Link to="/" className="navbar-item" >Home</Link> 
        <Link to="/drivers" className="navbar-item" >Drivers</Link> 
      </div>
    </nav>
  )
}

export default Navbar