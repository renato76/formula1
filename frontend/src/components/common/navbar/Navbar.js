import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

class Navbar extends React.Component {
  state = { isActive: false }

  // Write a function that toggles className
  handleToggle = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  closeMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  // One class hides the menu links by having height of zero and overflow hiddne
  // another class shows the links by having height of 10rem added to the above class
  // then in return I need an onClick that triggers the function

  render() {
    const isActive = this.state.isActive

    return (
      <nav className="navbar-container">
        <div className={isActive ? 'navbar' : 'navbar-closed' }>
          {!isActive ? <FaBars className="menu-btn" onClick={this.handleToggle} /> :
            <FaTimes className="times-btn" onClick={this.handleToggle} />}
          <Link to="/" className="navbar-item" onClick={this.closeMenu}>Home</Link> 
          <Link to="/drivers" className="navbar-item" onClick={this.closeMenu}>Drivers</Link> 
          <Link to="/teams" className="navbar-item">Teams</Link> 
          <Link to="/register" className="navbar-item">Register</Link> 
          <Link to="/login" className="navbar-item">Login</Link> 
        </div>
      </nav>
    )
  }
}

export default Navbar