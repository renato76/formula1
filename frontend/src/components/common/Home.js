import React from 'react'
import { getAllDrivers } from '../../lib/api'

class Home extends React.Component {

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
        <div className="drivers-row">
          {this.state.drivers.map(driver => <div key={driver.id}>{driver.firstname}</div>)}
        </div>
      </div>
    )
  }
}

export default Home
