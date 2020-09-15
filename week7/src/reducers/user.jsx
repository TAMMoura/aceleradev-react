import {TYPES_USER} from '../actions';

const initialValue = {
  errorMessage: "",
  name: "",
  status: "",
}

const user = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES_USER.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
export default user;