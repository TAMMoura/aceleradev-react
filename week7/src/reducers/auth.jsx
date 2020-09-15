  
import {TYPES_AUTH} from '../actions';

const initialValue = {
  accessToken: "",
  errorMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
}

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES_AUTH.UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default authReducer;