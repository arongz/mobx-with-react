import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';

@observer
class Timer extends React.Component {
  @observable secondsPassed = 0

  componentWillMount() {
    setInterval(() => {
        this.secondsPassed++
    }, 1000)
  }

  render() {
    return (<span>Seconds passed: { this.secondsPassed } </span> )
  }
}


export default Timer
