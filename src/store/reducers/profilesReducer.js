import { FETCH_PROFILE_ERROR, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "../ationTypes";

const initState = {
  profile: {},
  error: null,
  isLoading: false
};

const reducer = (state=initState, actions) => {
  switch(actions.type) {
    case FETCH_PROFILE_REQUEST:
      return {...state, isLoading: true};
    case FETCH_PROFILE_SUCCESS:
      return {...state, profile: actions.profile, isLoading: false, error: null};
    case FETCH_PROFILE_ERROR:
      return {...state, error: actions.error, isLoading: false};
    default:
      return state;
  }
};

export default reducer;