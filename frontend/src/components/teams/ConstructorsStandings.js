import React from 'react'

const ConstructorsStandings = (props) => {
  
  const { name } = props
  // console.log(props)

  // const sum = (acc, curr) => acc + curr
  // const points = props.drivers.map(driver => driver.points).reduce(sum)
  // console.log(points)


  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default ConstructorsStandings
