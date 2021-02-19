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
    this.setState({
      teams: response.data
    })
    console.log(this.state.teams)
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
          {this.state.teams.map(team => 
            <TeamsCard key={team.id} {...team} />
          )}
        </div>
      </div>
    )
  }


}


export default TeamsIndex