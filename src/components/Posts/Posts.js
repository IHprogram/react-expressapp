import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';

function Posts() {
  const postsState = useSelector((state) => state.posts);

  console.log(postsState);
  return (
    <div>
      <h1>投稿一覧</h1>
      <Post />
    </div>
  )
}

export default Posts