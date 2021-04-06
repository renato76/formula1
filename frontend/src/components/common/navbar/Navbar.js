import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavbarNew() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">  
        <div className="navbar-container">  
          <div className="logo">
            <Link to="/" className="logo-img" onClick={closeMobileMenu}></Link>  
          </div>    
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
              <Link to='/register' className="nav-links-mobile" onClick={closeMobileMenu}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavbarNew
