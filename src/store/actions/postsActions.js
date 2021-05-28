import axios from 'axios';
import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../ationTypes";

const fetchPostsRequest = () => {
  return {type: FETCH_POSTS_REQUEST};
};

const fetchPostsSuccess = (posts) => {
  return {type: FETCH_POSTS_SUCCESS, posts};
};

const fetchPostsError = (error) => {
  return {type: FETCH_POSTS_ERROR, error};
};

export const fetchPosts = () => {
  return async dispatch => {
    try{
      dispatch(fetchPostsRequest());

      const res = await axios.get('/posts');
      const postsPromises = res.data.map( async post => {
        return  axios.get(`users/${post.userId}`).then(res => {
          const name = res.data.name;
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            name: name
          }
        });        
      });

      const posts = await Promise.all(postsPromises);
      dispatch(fetchPostsSuccess(posts));
    } catch(err) {
      dispatch(fetchPostsError(err));
    }
  }
};