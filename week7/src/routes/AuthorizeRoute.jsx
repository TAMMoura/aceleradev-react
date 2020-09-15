import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { mapAuthResponse } from '../modules/url';
import {
  authCallbackSuccess,
  authCallbackFailure,
} from '../store/index';

import Authorize from '../containers/Authorize/Authorize';

const AuthorizeRoute = ({ location }) => {
  const [redirect, setRedirect] = useState(false);
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { hash } = location;
    const hashData = mapAuthResponse(hash);

    if (hashData.error) {
      dispatch(authCallbackFailure(hashData.error));
    }

    dispatch(authCallbackSuccess(hashData));
  }, [location, dispatch]);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setRedirect(true), 3000);
    }
  }, [isLogged]);

  if (redirect) return <Redirect to="/dashboard" />;


  return <Authorize />;

};
export default AuthorizeRoute;