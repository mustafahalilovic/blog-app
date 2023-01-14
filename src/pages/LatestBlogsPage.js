import React, {useState} from 'react';
import Blog from '../compontens/Blog';

export default function LatestBlogsPage({blogs}) {
  
  const renderedBlogs = blogs.map(blog => <Blog blog={blog} />);
  
  return (
    <div className='latest-ctn'>
        {renderedBlogs}
    </div>
  )
}
