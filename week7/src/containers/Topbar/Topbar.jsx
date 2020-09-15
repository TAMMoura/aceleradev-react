import React from 'react';

import {useSelector} from 'react-redux';

import './Topbar.scss';
import { Logo } from '../../components';

const Topbar = () => {

  const {user} = useSelector(state => state);
  
  return(
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Logo/>
        <div className="user">
          <p className="user__name">{user.name}</p>
          <div className="user__thumb">
            <img src={user.thumb} alt={user.name}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;