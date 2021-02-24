import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DriversStandings = (props) => {
  const [info, setInfo] = useState(false)

  const showInfo = () => {
    if (window.innerWidth <= 768) {
      setInfo(false)
    } else {
      setInfo(true)
    }
  }
  window.addEventListener('resize', showInfo)

  const { id, firstname, surname, team, points } = props
  console.log(props)
  console.log(team.name)
  const teamClassNames = {
    'Mercedes': 'team-color-icon-mercedes',
    'Ferrari': 'team-color-icon-ferrari',
    'McLaren': 'team-color-icon-mclaren',
    'Alpine': 'team-color-icon-alpine',
    'Haas F1 Team': 'team-color-icon-haas',
    'Alfa Romeo Racing': 'team-color-icon-alfa-romeo',
    'Red Bull Racing': 'team-color-icon-red-bull',
    'Aston Martin': 'team-color-icon-aston-martin',
    'AlphaTauri': 'team-color-icon-alpha-tauri',
    'Williams': 'team-color-icon-williams'
  }
  const teamClassName = teamClassNames[team.name]
  
  return (
    <div className="standings-container">
      <div className="standings">
        <Link to={`/drivers/${id}`} >
          <div className="standings-list-items">  
            <div className="drivers-name">
              <span className={teamClassName}></span>
              {info && <h5 className="firstname">{firstname}</h5> }
              <h4 className="surname">{surname}</h4>
              {info && 
                <h4 className="team-name">{team.name}</h4>
              }
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