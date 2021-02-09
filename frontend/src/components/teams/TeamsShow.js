import React from 'react'
import { getSingleTeam } from '../../lib/api'

class TeamsShow extends React.Component {
  state = {
    team: null
  }
  async componentDidMount() {
    console.log(this.props)
    const teamId = this.props.match.params.id
    console.log(teamId)
    const response = await getSingleTeam(teamId)
    console.log(response)
  }

  render() {
    const { team } = this.state
    console.log(team)
    return (
      <div>ShowTime</div>
    )
  }

}

export default TeamsShow