import {user} from '../../constants';
import { LOGIN_ERROR, LOGIN_ERROR_RESET, LOGIN_SUCCESS, LOG_OUT_SUCCESS } from '../ationTypes';
import { push } from 'connected-react-router';

const loginSuccess = () => {
  return {type: LOGIN_SUCCESS};
};

const loginError = (error) => {
  return {type: LOGIN_ERROR, error};
};

export const loginErrorReset = () => {
  return {type: LOGIN_ERROR_RESET};
};

export const loginUser = (userData) => {
  return async dispatch => {
    try{
      if(userData && (userData.username === user.username && userData.password === user.password)) {
        await dispatch(loginSuccess());
        dispatch(push('/'));
      } else {
         throw new Error("Имя пользователя или пароль введены не верно");
      }
    } catch(err) {
      await dispatch(loginError(err));
      dispatch(push('/login'));
    }
  }
};

export const logOutUser = () => {
  return {type: LOG_OUT_SUCCESS};
};

