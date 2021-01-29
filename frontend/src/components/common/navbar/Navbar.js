import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="navbar-item" >Home</Link> 
          <Link to="/drivers" className="navbar-item" >Drivers</Link> 
        </div>
      </nav>
    )
  }
}

export default Navbar