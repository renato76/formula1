import React from 'react'
import { getAllDrivers } from '../../lib/api'
import DriversStandings from '../drivers/DriversStandings'

class Home extends React.Component {
  state = {
    screen: 'drivers',
    drivers: null
  }

  changeTab = screen => {
    this.setState({ screen })
  }

  async componentDidMount() {
    const response = await getAllDrivers()
    console.log(response)
    this.setState({
      drivers: response.data
    })  
  }

  render() {
    const { screen } = this.state
    const drivers = this.state.drivers
    console.log(drivers)
    if (!drivers) return null
    return (
      <div>
        <div className="tabs">
          {['drivers', 'constructors', 'last-race'].map((tab, i) => (
            <button key={i} value={tab} onClick={() => this.changeTab(tab)} className={`tab ${screen === tab ? '' : 'inactive'}`}>{tab.toUpperCase()}</button>
          ))}
        </div>
        <div className="home-container">
          <div className="drivers-standings" style={{ display: screen === 'drivers' ? 'block' : 'none' }}>
            <div className="drivers-standings-heading">
              <h1>Drivers Standings</h1>
            </div>
            <div className="drivers-standings-container">
              {drivers.sort((a, b) => b.points > a.points ? 1 : -1).map(driver => 
                <DriversStandings key={driver.id} {...driver} />
              )}       
            </div>
          </div>
          
          <div className="constructors-standings" style={{ display: screen === 'constructors' ? 'block' : 'none' }}>
            <h1>Constructors Standings</h1>
          </div>
          <div className="last-race" style={{ display: screen === 'last-race' ? 'block' : 'none' }}>
            <h1>Last Race</h1>
          </div>
        </div> 
      </div>
        
    )
  }
}

export default Home