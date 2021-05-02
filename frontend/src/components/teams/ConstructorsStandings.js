import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ConstructorsStandings = (props) => {
  
  const { id, name, car_image: carImage } = props
  console.log(props)
  const [info, setInfo] = useState(false)
  const showInfo = () => {
    if (window.innerWidth <= 768) {
      setInfo(false)
    } else {
      setInfo(true)
    }
  }
  window.addEventListener('resize', showInfo)
  useEffect(() => {
    showInfo()
  }, [])

  const sum = (acc, curr) => acc + curr
  const teamPoints = props.drivers.map(driver => driver.points).reduce(sum)
  console.log(teamPoints)

  const team = props.name


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
  const teamClassName = teamClassNames[name]

  return (
    <div className="standings-container">
      <div className="standings">
        <Link to={`/teams/${id}`} >
          <div id="standings-list" className="standings-list-items">  
            <div className="constructors-name home-icons">
              <span className={teamClassName}></span>
              <h5 className="teamname">{name}</h5>
              {/* <h4 className="surname">{surname}</h4> */}
              {info && 
                <h4 className="team-name">{team.name}</h4>
              }
            </div>
            <div className="teams-standings-points">
              <img className="car-image-small" src={carImage} />
              <h6 className="standings-points">{teamPoints} PTS</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default ConstructorsStandings
