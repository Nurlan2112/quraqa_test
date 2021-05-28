import { FETCH_PHOTOS_ERROR, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS } from "../ationTypes";

const initState = {
  photos: [],
  error: null,
  isLoading: false
};

const reducer = (state=initState, actions) => {
  switch(actions.type) {
    case FETCH_PHOTOS_REQUEST:
      return {...state, isLoading: true};
    case FETCH_PHOTOS_SUCCESS:
      return {...state, photos: actions.photos, isLoading: false, error: null};
    case FETCH_PHOTOS_ERROR:
      return {...state, error: actions.error, isLoading: false};
    default:
      return state;
  }
};

export default reducer;