import React from 'react'
import TeamsCard from './TeamsCard'
import { getAllTeams } from '../../lib/api'

class TeamsIndex extends React.Component {
  state = {
    teams: null
  }
  async componentDidMount() {
    const response = await getAllTeams()
    // console.log(response)
    const teams = response.data
    console.log(teams)

    const sums = (acc, curr) => acc + curr
    const teamPoints = teams.map(team => team.drivers.map(driver => driver.points).reduce(sums)).sort((a, b) => b > a ? 1 : -1)
    console.log(teamPoints)
    const sum = (acc, curr) => acc + curr
    const sortedTeams = teams.sort((a, b) => (b.drivers.map(driver => driver.points).reduce(sum)) > (a.drivers.map(driver => driver.points).reduce(sum)) ? 1 : -1)
    console.log(sortedTeams)

    this.setState({
      teams: sortedTeams
    })
  }



  render() {
    const teams = this.state.teams
    // console.log(teams)
    if (!teams) return null
    return (
      <div className="homepage-container">
        <div className="teams-title">
          <h1>F1 Teams 2021</h1>
        </div>
        <div className="teams-row">
          {teams.map(team => 
            <TeamsCard key={team.id} {...team} />
          )}
        </div>
      </div>
    )
  }


}


export default TeamsIndex