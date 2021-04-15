import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <div className="topnav">
        
      </div>
      <nav className="navbar">  
        <div className="navbar-container">   
          <Link to="/" className="logo-container" onClick={closeMobileMenu}></Link>  
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/drivers' className="nav-links" onClick={closeMobileMenu}>
                Drivers
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/teams' className="nav-links" onClick={closeMobileMenu}>
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/standings' className="nav-links" onClick={closeMobileMenu}>
                Standings
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className="nav-links" onClick={closeMobileMenu}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
