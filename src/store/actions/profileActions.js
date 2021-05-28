import axios from 'axios';
import { FETCH_PROFILE_ERROR, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "../ationTypes";

const fetchProfileRequest = () => {
  return {type: FETCH_PROFILE_REQUEST};
};

const fetchProfileSuccess = (profile) => {
  return {type: FETCH_PROFILE_SUCCESS, profile};
};

const fetchProfileError = (error) => {
  return {type: FETCH_PROFILE_ERROR, error};
}; 

export const fetchProfile = () => {
  return async dispatch => {
    try{
      dispatch(fetchProfileRequest());
      const res = await axios.get('/users/1');
      dispatch(fetchProfileSuccess(res.data));
    } catch(err) {
      dispatch(fetchProfileError(err));
    }
  }
};