import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <h1> Login</h1>
        <h2>MatchPath: {this.props.match.path}</h2>
        <h2>(拦截) From: {this.props.location.state.from.pathname}</h2>
      </div>
    );
  }
}

export default Login


