import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, status: 'Even'}

  onStatusChange = () => {
    const {count, status} = this.state
    const num = this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
    if (num % 2 === 0) {
      return this.setState({status: 'Even'})
    }
    return this.setState({status: 'Odd'})
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="bg-container">
        <h1 className="count-value">Count {count}</h1>
        <div className="increment-con">
          <h1 className="status-heading">Count is {status}</h1>
          <button className="btn" onClick={this.onStatusChange}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
