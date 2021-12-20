import React from 'react';
import * as categories from './postConstant';
import { IPost } from './postInterface';

const posts: IPost[] = [
  {
    id: 1,
    title: 'Post info',
    text: 'Lorem ipsum dolor1',
    category: categories.INFO,
  },
  {
    id: 2,
    title: 'Post create',
    text: 'Lorem ipsum dolor2',
    category: categories.CREATE,
  },
  {
    id: 3,
    title: 'Post ubdate',
    text: 'Lorem ipsum dolor3',
    category: categories.UBDATE,
  },
  {
    id: 4,
    title: 'Post ubdate',
    text: 'Lorem ipsum dolor4',
    category: categories.UBDATE,
  },
  {
    id: 5,
    title: 'Post info',
    text: 'Lorem ipsum dolor5',
    category: categories.INFO,
  },
]

export default posts;