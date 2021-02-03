import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-desktop">
          <Link to="/" className="navbar-item" >Home</Link> 
          <Link to="/drivers" className="navbar-item">Drivers</Link> 
          <Link to="/teams" className="navbar-item">Teams</Link> 
          <Link to="/register" className="navbar-item">Register</Link> 
          <Link to="/login" className="navbar-item">Login</Link> 
        </div>
      </nav>
    </div>
  )
}

export default DesktopNav
