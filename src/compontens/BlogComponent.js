import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReadBlog from './ReadBlog';

export default function BlogComponent() {
  const params = useParams();
  const blogs = useSelector((state)=>{
    return state.blogs.blogs;
  });

    if(!blogs) return;

    const renderedBlog = blogs.filter((blog)=>{
      return blog.id === params.id;
    });
  

  return (
    <div className='blog-page'>
      <ReadBlog blog={renderedBlog[0]} />
    </div>
  )
}
