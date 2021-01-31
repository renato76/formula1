import React from 'react'
import DriversCard from '../../drivers/DriversCard'
import { getAllDrivers } from '../../lib/api'

class Drivers extends React.Component {
  state = {
    drivers: null
  }

  async componentDidMount() {
    const response = await getAllDrivers()
    // console.log(response)
    this.setState({
      drivers: response.data
    })
    // console.log(this.state.movies)
  }


  render() {
    const drivers = this.state.drivers
    console.log(drivers)

    if (!this.state.drivers) return null

    return (
      <div className="homepage-container">
        <div className="drivers-title">
          <h1>F1 Drivers 2020</h1>
        </div>
        <div className="drivers-row">
          {this.state.drivers.map(driver => 
            <DriversCard key={driver.id} {...driver} />
          )}
        </div>
      </div>
    )
  }
}

export default Drivers