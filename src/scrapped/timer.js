import React, { Component } from 'react'

export default class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  tick () {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }))
  }

  componentDidMount () {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render () {
    return (
      <div>You have been here for { this.state.secondsElapsed } seconds</div>
    );
  }
}
