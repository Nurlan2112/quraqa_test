import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import { fetchPosts } from '../../store/actions/postsActions';

const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts.posts);
  const isLoading = useSelector(state=>state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return(
    <div className="PostsContainer">
      {isLoading ? 
                  <Spinner animation="border" />  :
                  <Posts posts={posts}/>}
    </div>
  );
};

export default PostsContainer;