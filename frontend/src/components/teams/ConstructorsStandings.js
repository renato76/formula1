import React from 'react'

const ConstructorsStandings = (props) => {
  
  const { name } = props
  console.log(props)

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
export default ConstructorsStandings
