import React from 'react';
import PostList from './component/postList/PostList';
import PostCategory from './component/postCategory/PostCategory';
import posts from './buildPosts/post';

function App() {
  return <>
    <PostList posts={posts} />
    <PostCategory posts={posts} />
  </>;
}

export default App;
