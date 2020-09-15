import React from 'react';

import {config} from '../../config'

import './Login.scss';
import { Logo } from '../../components';

const Login = () => (
    <main className="login" data-testid="login">
        <div className="container">
        <Logo className="spotify-brand" />
        <h2 className="login__microcopy">
        Alô
        <strong>
          Som!
        </strong>
      </h2>
        <a 
          href={`${config.spotify.authorizationURL}?client_id=${config.spotify.clientId}&redirect_uri=${config.spotify.redirectUrl}&scope=${config.spotify.scopes.toString().replace(/(,)/gi, ' ')}&response_type=token`}
        >
          <button className="login__auth-button">
          Entrar com o Spotify
          </button>
        </a>
      </div>
    </main>
  );
export default Login;