import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import DriversIndex from './components/drivers/DriversIndex'
import DriversShow from './components/drivers/DriversShow'
import TeamsIndex from './components/teams/TeamsIndex'
import TeamsShow from './components/teams/TeamsShow'
import Standings from './components/common/Standings'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/drivers/:id" component={DriversShow} />
        <Route path="/teams/:id" component={TeamsShow} />
        <Route path="/drivers" component={DriversIndex} />
        <Route path="/teams" component={TeamsIndex} />
        <Route path="/standings" component={Standings} />
        <Route exact path="/" component={Home} />  
      </Switch>
    </BrowserRouter>
  )
}

export default App
