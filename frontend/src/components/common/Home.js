import React from 'react'

class Home extends React.Component {
  state = {
    screen: 'drivers',
    hasBegun: true
  }

  changeTab = screen => {
    this.setState({ screen })
  }


  render() {
    const { screen } = this.state
    console.log(screen)
    return (
      <div>
        <div className="tabs">
          {['drivers', 'constructors', 'last-race'].map((tab, i) => (
            <button key={i} value={tab} onClick={() => this.changeTab(tab)} className={`tab ${screen === tab ? '' : 'inactive'}`}>{tab.toUpperCase()}</button>
          ))}
        </div>
        <div className="home-container">
          <div className="drivers-standings" style={{ display: screen === 'drivers' ? 'block' : 'none' }}>
            <h1>Drivers Standings</h1>
          </div>
          <div className="constructors-standings" style={{ display: screen === 'constructors' ? 'block' : 'none' }}>
            <h1>Constructors Standings</h1>
          </div>
          <div className="last-race" style={{ display: screen === 'last-race' ? 'block' : 'none' }}>
            <h1>Last Race</h1>
          </div>
        </div> 
      </div>
        
    )
  }
}

export default Home