import React from 'react'
import DriversCard from './DriversCard'
import { getAllDrivers } from '../../lib/api'

class DriversIndex extends React.Component {
  state = {
    drivers: null
  }
  async componentDidMount() {
    const response = await getAllDrivers()
    const drivers = response.data
    drivers.sort((a, b) => b.points > a.points ? 1 : -1)
    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i]
      driver.index = i + 1
    }
    this.setState({
      drivers
    })
  }
  render() {
    const drivers = this.state.drivers
    if (!drivers) return null
    return (
      <div className="homepage-container">
        <div className="drivers-title">
          <h1>F1 Drivers 2021</h1>
        </div>
        <div className="drivers-row">
          {drivers.map(driver => 
            <DriversCard key={driver.id} {...driver} />
          )}
        </div>
      </div>
    )
  }
}

export default DriversIndex
