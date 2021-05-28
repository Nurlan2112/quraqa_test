import React from 'react';
import PostsItem from './PostsItem/PostsItem';

const Posts = ({posts}) => {
  return(
    <div className="Posts">
      {posts.map(post => {
        return <PostsItem key={post.id}
                          title={post.title}
                          name={post.name}
                          body={post.body} />
      })}
    </div>
  );
};

export default Posts;