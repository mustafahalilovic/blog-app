import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReadBlog from '../compontens/ReadBlog';

export default function BlogPage() {
  const params = useParams();
  const blogs = useSelector((state)=>{
    return state.blogs;
  })

  const renderedBlog = blogs.filter((blog)=>{
    return blog.id === parseInt(params.id);
  })

  return (
    <div className='blog-page'>
      <ReadBlog blog={renderedBlog[0]} />
    </div>
  )
}
