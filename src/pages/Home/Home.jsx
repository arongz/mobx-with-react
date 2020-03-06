import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomeSubPage from './HomeSubPage.jsx'
// import * as Api from '@/service'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bannerA: ''
    }
  }

  componentWillMount() {
    // Api.banners().then(res => {
    //   console.log('this.state.bannerA===>' + res.info.top[0].img);
    //   this.setState({bannerA: res.info.top[0].img})
    // });
  }

  render() {
    return (
      <div>
        <img src={this.state.bannerA} alt=""/>
        <h1> Home.jsx </h1>
        <h2>pathname---> {this.props.location.pathname}</h2>
        <ul>
          
          <li><Link to={`${this.props.match.url}/homesub`}>homesub</Link></li>
        </ul>
         
        <Route path={`${this.props.match.url}/homesub`}  component={HomeSubPage}/>
      </div>
    );
  }
}

export default Home
