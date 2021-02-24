import React from 'react'
import { Link } from 'react-router-dom'

const TeamsCard = (props) => {
  const { id, name, team_logo: teamLogo, car_image: carImage } = props
  return (
    <div className="teams-card-container">
      <Link to={`/teams/${id}`} >
        <div className="teams-card">
          <div className="teams-card-topbar">
            <div className="team-name">
              <h3>{name}</h3>
            </div>
            <div className="team-logo-container">
              <figure className="team-logo-box">
                <img className="team-logo" src={teamLogo} alt="teamlogo" />
              </figure>
            </div>
          </div>
          <div className="teams-drivers-container">       
            <div className="team-drivers">
              <h4>Lewis</h4>
              <h3>Hamilton</h3>
            </div>
            <div className="team-drivers">
              <h4>Valtteri</h4>
              <h3>Bottas</h3>
            </div>
          </div>
          <div className="teams-grid-container">
            <div className="image-background">
              <div className="teams-card-image">      
                <img src={carImage} alt="car-image" />   
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TeamsCard