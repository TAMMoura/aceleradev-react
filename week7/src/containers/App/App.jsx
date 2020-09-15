import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes/index';

import './App.scss';

const App = () => (
  <div className="app" data-testid="app">
    <Router>
      <Routes />
    </Router>
  </div>
);

export default App;
