import React from 'react';
import styles from './stylePost.module.scss';

function Post({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <article className={styles.article}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

export default Post;