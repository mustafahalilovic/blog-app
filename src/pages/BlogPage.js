import React from 'react';
import { useParams } from 'react-router';
import ReadBlog from '../compontens/ReadBlog';

export default function BlogPage({blogs}) {
  const params = useParams();

  const renderedBlog = blogs.filter((blog)=>{
    return blog.id === parseInt(params.id);
  })

  return (
    <div className='blog-page'>
      <ReadBlog blog={renderedBlog[0]} />
    </div>
  )
}
