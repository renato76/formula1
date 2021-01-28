import React from 'react'
import Navbar from './components/common/navbar/Navbar'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/drivers')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <div>
      <Navbar />
      {/* <h1>Lets do this thing!</h1> */}
    </div>
  }
}

export default App
