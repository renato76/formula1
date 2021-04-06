import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar'
import Home from './components/common/Home'
import DriversIndex from './components/drivers/DriversIndex'
import DriversShow from './components/drivers/DriversShow'
import TeamsIndex from './components/teams/TeamsIndex'
import TeamsShow from './components/teams/TeamsShow'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/drivers/:id" component={DriversShow} />
        <Route path="/teams/:id" component={TeamsShow} />
        <Route path="/drivers" component={DriversIndex} />
        <Route path="/teams" component={TeamsIndex} />
        <Route exact path="/" component={Home} />  
      </Switch>
    </BrowserRouter>
  )
}

export default App
