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
    // console.log(this.state)
    if (!driver) return null
    return (
      <div className="drivershow-container">
        <div className="row detail-row">
          <div className="col-sm-6 detail-image">
            <img src={driver.detail_image} />
          </div>
          <div className="col-sm-6 detail-info">

          </div>
        </div>

        <div className="row">
          <div className="col-sm">col-sm</div>
          <div className="col-sm">col-sm</div>
          <div className="col-sm">col-sm</div>
        </div>
      </div>
    )
  }


}

export default DriversShow