import axios from 'axios';
import { FETCH_PHOTOS_ERROR, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS } from "../ationTypes";

const fetchPhotosRequest = () => {
  return {type: FETCH_PHOTOS_REQUEST};
};

const fetchPhotosSuccess = (photos) => {
  return {type: FETCH_PHOTOS_SUCCESS, photos};
};

const fetchPhotosError = (error) => {
  return {type: FETCH_PHOTOS_ERROR, error};
};

export const fetchPhotos = () => {
  return async dispatch => {
    try{
      dispatch(fetchPhotosRequest());
      const res = await axios.get('/albums/1/photos');
      
      dispatch(fetchPhotosSuccess(res.data));
    } catch(err) {
      dispatch(fetchPhotosError(err));
    }
  }
};

