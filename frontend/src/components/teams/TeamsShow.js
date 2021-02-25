import React from 'react'
import { getSingleTeam } from '../../lib/api'

class TeamsShow extends React.Component {
  state = {
    team: null
  }
  async componentDidMount() {
    // console.log(this.props)
    const teamId = this.props.match.params.id
    // console.log(teamId)
    const response = await getSingleTeam(teamId)
    console.log(response)
    this.setState({
      team: response.data
    })
  }

  render() {
    const { team } = this.state
    console.log(team)
    if (!team) return null
    return (
      <div className="teamsshow-container">
        <div className="team-detail-row">
          <div className="detail-teams-logo-container">
            <div className="team-name">
              <h3>{team.name}</h3>
            </div>
            <div className="team-logo">
              <img src={team.team_logo} />
            </div>
          </div>
          <div className="team-detail-container">
            <div className="detail-title">
              <h4>Full Team Name</h4>
              <h4>Base</h4>
              <h4>Team Chief</h4>
              <h4>Technical Chief</h4>
              <h4>Chassis</h4>
              <h4>Power Unit</h4>
              <h4>First Team Entry</h4>
              <h4>World Championships</h4>
              <h4>Pole Positions</h4>
              <h4>Fastest Laps</h4>
              
            </div>
            <div className="detail-info">
              <h4>{team.name}</h4>
              <h4>{team.base}</h4>
              <h4>{team.team_chief}</h4>
              <h4>{team.technical_chief}</h4>
              <h4>{team.chassis}</h4>
              <h4>{team.power_unit}</h4>
              <h4>{team.first_team_entry}</h4>
              <h4>{team.world_championships}</h4>
              <h4>{team.pole_positions}</h4>
              <h4>{team.fastest_laps}</h4>            
            </div>
          </div>
          <div className="team-profile">
            <h4>Team Profile</h4>
            <p>{team.team_profile}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default TeamsShow