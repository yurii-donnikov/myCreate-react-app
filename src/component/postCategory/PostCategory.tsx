import React from 'react';
import Post from '../post/Post';
import * as categories from '../../buildPosts/postConstant';
import { IPost } from '../../buildPosts/postInterface';
import styles from './stylePostCategory.module.scss';

function PostCategory({ posts }: { posts: IPost[] }): JSX.Element {
  const allCategories: string[] = Object.values(categories);
  return (
    <ul className={styles.listCategory}>
      {allCategories.map(category => (
        <li key={category}>
          <h2 className={styles.topicInfo}>{category}</h2>
          {posts.map((post: IPost) => {
            if (category === post.category) {
              return (
                <Post
                  key={post.id}
                  title={post.title}
                  text={post.text}
                />
              )
            }
            return null;
          })}
        </li>
      ))}
    </ul>
  )
}

export default PostCategory;