import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import photosReducer from './reducers/photosReducer';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';
import profilesReducer from './reducers/profilesReducer';
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  photos: photosReducer,
  posts: postsReducer,
  user: usersReducer,
  profile: profilesReducer,
  router: connectRouter(history)
});

const middleWare = [
  thunk,
  routerMiddleware(history)
];

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(...middleWare)));

store.subscribe(()=>{
  saveToLocalStorage({
    user: {
      isAuthorized: store.getState().user.isAuthorized
    }
  })
});

export default store;