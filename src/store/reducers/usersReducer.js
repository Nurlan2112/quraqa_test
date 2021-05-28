
import { LOGIN_ERROR, LOGIN_ERROR_RESET, LOGIN_SUCCESS, LOG_OUT_SUCCESS } from '../ationTypes';

const initState = {
  error: null,
  isAuthorized: false
};

const reducer = (state=initState, actions) => {
  switch(actions.type) {    
    case LOGIN_SUCCESS:
      return {...state, isAuthorized: true};
    case LOGIN_ERROR:
      return {...state, error: actions.error, isAuthorized: false};
    case LOGIN_ERROR_RESET:
      return {...state, error: null, isAuthorized: false};
    case LOG_OUT_SUCCESS:
      return {...state, isAuthorized: false};
    default:
      return state;
  }
};

export default reducer;