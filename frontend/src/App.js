import React from 'react'
import Navbar from './components/common/navbar/Navbar'
import Home from './components/common/Home'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/drivers')
      await response.json()
      
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <div>
      <Navbar />
      <Home />
    </div>
  }
}

export default App
