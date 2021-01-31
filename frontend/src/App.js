import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar'
// import MobileNavbar from './components/common/navbar/MobileNavbar'
import Home from './components/common/Home'
import Drivers from './components/common/Drivers'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/drivers" component={Drivers} />
        <Route exact path="/" component={Home} />  
        {/* <Route path="constructors" component={Constructors} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
