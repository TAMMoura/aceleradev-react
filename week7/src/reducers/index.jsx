  
import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import content from './content';
import user from './user';

const rootReducer = combineReducers({app, user, auth, content});

export default rootReducer;