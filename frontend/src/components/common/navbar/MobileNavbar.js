import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <div>
      <nav className="navbar">
        <Link to="/" className= "navbar-logo">

        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}
          />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick=
              {closeMobileMenu}>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/drivers" className="nav-links" onClick=
              {closeMobileMenu}>Drivers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams" className="nav-links" onClick=
              {closeMobileMenu}>Teams
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default MobileNavbar
