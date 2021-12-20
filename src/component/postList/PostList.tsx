import React from 'react';
import Post from '../post/Post';
import { IPost } from '../../buildPosts/postInterface';
import styles from './stylePostList.module.scss';

function PostList({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <ul className={styles.listStyle}>
      {posts.map((post: IPost) => {
        return (
          <li key={post.id}>
            <Post title={post.title} text={post.text} />
          </li>
        )
      })
      }
    </ul>
  )
}

export default PostList;