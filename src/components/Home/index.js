// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogedIn: false}

  onClick = () => {
    this.setState(prevState => ({isLogedIn: !prevState.isLogedIn}))
  }

  render() {
    const {isLogedIn} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <Message isLogin={isLogedIn} />
          {isLogedIn ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
