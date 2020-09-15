import React from 'react';

import { Loading } from '../../components';

import './Authorize.scss';

const Authorize = () => {
  return (
    <div className="callback" data-testid="callback">
      <div className="container">
        <Loading text="Autenticando..." />
      </div>
    </div>
  );
};

export default Authorize;
