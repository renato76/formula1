import React from 'react'
import { Link } from 'react-router-dom'

const DriversStandings = (props) => {

  const { id, firstname, surname, team, points } = props
  // console.log(props)
  console.log(team.name)
  const teamClassNames = {
    'Mercedes': 'team-color-icon-mercedes',
    'Ferrari': 'team-color-icon-ferrari'
  }
  const teamClassName = teamClassNames[team.name]
  
  return (
    <div className="standings-container">
      <div className="standings">
        <Link to={`/drivers/${id}`} >
          <div className="standings-list-items">  
            <div className="drivers-name">
              <span className={teamClassName}></span>
              <h4 className="firstname">{firstname}</h4>
              <h4 className="surname">{surname}</h4>
            </div>
            <div className="standings-team">
              <h4>{team.name}</h4>
            </div>
            <div className="drivers-standings-points">
              <h4 className="standings-points">{points} PTS</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DriversStandings