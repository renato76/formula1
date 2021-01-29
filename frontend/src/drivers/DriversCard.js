import React from 'react'

const DriversCard = (props) => {
  const { title, firstname, surname, image } = props
  return (
    <div className="drivers-card-container">
      <h1>{firstname} {surname}</h1>
      <img src={image} alt={title} />
    </div>
  )
}

export default DriversCard