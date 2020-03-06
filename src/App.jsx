// App主容器
import React, { Component } from 'react';
import {
  Route,
  // Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Routes from './router/routes'
// import * as Api from '@/service'
import Auth from './pages/TestPage/RouterAuth.jsx'

import TabBar from '@/pages/Layout/TabBar.jsx'
import { Button, Flex, WingBlank } from 'antd-mobile';

// 保存的登录状态, 到时根据需要修改
let isLogin = false; 

// 路由初始化, 检查是否需要登录
const RouteInit = ({ component: RenderComponent, isRequireAuth, ...rest }) => (
  <Route {...rest} render={props => {
    if (isRequireAuth === true && !isLogin) {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    } else {
      return <RenderComponent {...props}/>
    }
  }}/>
)

class App extends Component {
  render() {
    return (
      <div className="frame">

        <nav>
          <TabBar history={this.props.history}/>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/auth" component={Auth} />
            {Routes.map((route, i) => (
               <RouteInit key={i} {...route}/>
            ))}
          </Switch>
        </div>

      </div>
    );
  }
}

export default App
