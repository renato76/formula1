import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar'
import Home from './components/common/Home'
import DriversIndex from './components/drivers/DriversIndex'
import DriversShow from './components/drivers/DriversShow'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/drivers/:id" component={DriversShow} />
        <Route path="/drivers" component={DriversIndex} />
        <Route exact path="/" component={Home} />  
        {/* <Route path="constructors" component={Constructors} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
