import React from 'react'

const DriversCard = (props) => {
  const { title, firstname, surname, image } = props
  return (
    <div className="drivers-card-container">
      <div className="card-topbar">
        <h3></h3>
      </div>
      <div className="card-namebar">
        <h2>{firstname} {surname}</h2>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default DriversCard