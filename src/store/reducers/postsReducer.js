import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../ationTypes";

const initState = {
  posts: [],
  error: null,
  isLoading: false
};

const reducer = (state=initState, actions) => {
  switch(actions.type) {
    case FETCH_POSTS_REQUEST:
      return {...state, isLoading: true};
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: actions.posts, isLoading: false, error: null};
    case FETCH_POSTS_ERROR:
      return {...state, error: actions.error, isLoading: false};
    default:
      return state;
  }
};

export default reducer;