import React from 'react'
import { getSingleDriver } from '../../lib/api'

class DriversShow extends React.Component {
  state = {
    driver: null
  }

  async componentDidMount() {
    const driverId = this.props.match.params.id
    // console.log(driverId)
    const response = await getSingleDriver(driverId)
    console.log(response)

    this.setState({
      driver: response.data
    })
  }

  render() {
    const { driver } = this.state 
    console.log(driver)
    
    if (!driver) return null
    return (
      <div className="drivershow-container">
        <div className="detail-row">
          <div className="detail-image-name-container">
            <div className="detail-image">
              <img src={driver.detail_image} />
            </div>
            <div className="driver-flag">
              <h3>{driver.driver_number}</h3>
              <img src={driver.flag} />
            </div>
            <div className="detail-name">
              <h3>{driver.firstname} {driver.surname}</h3>
            </div>       
          </div>
          <div className="detail-container">
            <div className="detail-title">
              <h4>Team</h4>
              <h4>Country</h4>
              <h4>Podiums</h4>
              <h4>Points</h4>
              <h4>Points-to-date</h4>
              <h4>World Championships</h4>
            </div>
            <div className="detail-info">
              <h4>{driver.team.name}</h4>
              <h4>{driver.country}</h4>
              <h4>{driver.podiums}</h4>
              <h4>{driver.points}</h4>
              <h4>{driver.points_to_date}</h4>
              <h4>{driver.world_championships}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default DriversShow