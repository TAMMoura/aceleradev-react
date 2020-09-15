import React from 'react';

import { Player } from '../../containers';

import './Dashboard.scss';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      {children}

      <Player />
    </div>
  );
};

export default Dashboard;