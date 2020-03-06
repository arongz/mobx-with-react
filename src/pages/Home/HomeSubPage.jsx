import React, { Component } from 'react';
// import {withRouter} from 'react-router'

class HomeSubPage extends Component {
  constructor() {
    super()
  }

  handleClick () {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div>
        <h1> HomeSubPage.jsx {this.props.history.location.pathname}</h1>
        <h2 onClick={() => this.handleClick()}>---> about</h2>
      </div>

    );
  }
}

export default HomeSubPage


