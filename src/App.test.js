import React from 'react';
import ReactDOM from 'react-dom';

import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import ComplexButtonDemo from './pages/TestPage/ComplexButtonDemo.jsx'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
