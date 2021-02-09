import React from 'react'
import { Link } from 'react-router-dom'

const DriversCard = (props) => {

  const { id, title, firstname, surname, image, points, flag, team } = props
  // console.log(props)
  
  return (
    <div className="drivers-card-container">
      <Link to={`/drivers/${id}`} >
        <div className="cardo">
          <div className="card-topbar">
            <div className="card-position">
              <h3>{}</h3>
            </div>
            <div className="card-points">
              <h3>{points}</h3>
              <h4>PTS</h4>
            </div>
          </div>
          <div className="card-namebar">
            <div className="name">
              <h4>{firstname}</h4>
              <h3>{surname}</h3>
            </div>
            <div className="card-flag">
              <figure className="flag-container">
                <img className="flag" src={flag} alt="flag" />
              </figure>
            </div>
          </div>
          <div className="card-constructor">
            <h4>{team.name}</h4>
          </div>
          <div className="grid-container">
            <div className="image-background">
              <div className="cards-image">      
                <img src={image} alt={title} />   
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DriversCard