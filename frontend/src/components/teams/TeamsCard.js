import React from 'react'
import { Link } from 'react-router-dom'

const TeamsCard = (props) => {
  const { name } = props


  return (
    <div className="teams-card-container">
      <Link to="" >
        <div className="teams-card">
          <div className="teams-card-topbar">
            <div className="team-name">
              <h4>{name}</h4>
            </div>
            <div className="team-flag">
              <figure className="flag-container">
                {/* <img className="flag" src={flag} alt="flag" /> */}
              </figure>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TeamsCard