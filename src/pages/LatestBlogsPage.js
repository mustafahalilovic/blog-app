import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Blog from '../compontens/Blog';

export default function LatestBlogsPage() {
  const blogs = useSelector((state)=>{
    return state.blogs;
  })
  
  const renderedBlogs = blogs.map(blog => <Blog blog={blog} />);
  
  return (
    <div className='latest-ctn'>
        {renderedBlogs}
    </div>
  )
}
