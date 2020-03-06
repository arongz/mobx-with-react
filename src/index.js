import React from 'react';
import ReactDOM from 'react-dom';
import { observer, Provider } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App.jsx';
// import antm from './antm-viewport.min.js';
import registerServiceWorker from './registerServiceWorker';

@observer class mobXX {

}

ReactDOM.render((
    <Provider>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
