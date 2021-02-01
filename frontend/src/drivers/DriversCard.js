import React from 'react'

const DriversCard = (props) => {
  const { title, firstname, surname, image, team, points, flag } = props
  return (
    <div className="drivers-card-container">
      <div className="card-topbar">
        <div className="card-position">
          <h3>Position</h3>
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
        <h4>{team}</h4>
      </div>
      <div className="grid-container">
        <div className="image-background">
          <div className="card-image">      
            <img src={image} alt={title} />   
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriversCard