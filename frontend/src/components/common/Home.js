import React from 'react'
import { getAllDrivers, getAllTeams } from '../../lib/api'
import DriversStandings from '../drivers/DriversStandings'
import ConstructorsStandings from '../teams/ConstructorsStandings'

class Home extends React.Component {
  state = {
    screen: 'drivers',
    drivers: null,
    teams: null
  }
  async componentDidMount() {
    const response = await getAllDrivers()
    this.setState({
      drivers: response.data
    })  
    const teams = await getAllTeams()
    this.setState({
      teams: teams.data
    })
  }
  changeTab = screen => {
    this.setState({ screen })
  }
  render() {
    const { screen } = this.state
    const drivers = this.state.drivers
    const teams = this.state.teams
    if (!drivers) return null
    if (!teams) return null
    return (
      <div className="homepage-container">
        <div className="hero">
        
        </div>
        <div className="tabs">
          {['drivers', 'constructors', 'last-race'].map((tab, i) => (
            <button 
              key={i} 
              value={tab} 
              onClick={() => this.changeTab(tab)} 
              className={`tab ${screen === tab ? 'active' : 'inactive'}`}
            >{tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="home-container">
          <div 
            className="drivers-standings" 
            style={{ display: screen === 'drivers' ? 'block' : 'none' }}>
            <div className="drivers-standings-heading">
              <h1>Drivers Standings</h1>
            </div>
            <div className="drivers-standings-container">
              {drivers.sort((a, b) => b.points > a.points ? 1 : -1).map(driver => 
                <DriversStandings key={driver.id} {...driver} />
              )}       
            </div>
          </div>       
          <div 
            className="constructors-standings" 
            style={{ display: screen === 'constructors' ? 'block' : 'none' }}>
            <div className="contructors-standings-heading">
              <h1>Constructors Standings</h1>
            </div>
            <div className="constructors-standings-container">
              {teams.map(team =>
                <ConstructorsStandings key={team.id} {...team} />
              )}
            </div>
          </div>
          <div 
            className="last-race" 
            style={{ display: screen === 'last-race' ? 'block' : 'none' }}>
            <h1>Last Race</h1>
          </div>
        </div> 
      </div>
        
    )
  }
}

export default Home
