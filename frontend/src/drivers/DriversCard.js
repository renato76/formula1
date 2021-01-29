import React from 'react'

const DriversCard = (props) => {
  const { title, firstname, surname, image, team, points } = props
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
        <h2>{firstname} {surname}</h2>
      </div>
      <div className="constructor">
        <h4>{team}</h4>
      </div>
      <div className="image-background">
        <div className="card-image">      
          <img src={image} alt={title} />   
        </div>
      </div>
    </div>
  )
}

export default DriversCard