import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {CgComment} from 'react-icons/cg';

export default function Blog({blog}) {
  return (
    <div key={blog.id} className='blog-ctn'>
          <h4> {blog.username} </h4>
          <span className='date'> {blog.date} </span>
          <div className='question'>
            <Link to={`/dashboard/blog/${blog.id}`} className='links'>
              {blog.question}
            </Link>
          </div>
          <div className='sec-2'>
            <div className='sec-3'>
              <span className='num-ctn'>
                <AiOutlineLike />
                {blog.upvotes}
              </span>
              <span className='num-ctn'>
                <AiOutlineDislike />
                {blog.downvotes}
              </span>
              <span className='num-ctn'>
              <CgComment />
              </span>
            </div>
            <Link className='links'>Comments</Link>
          </div>
        </div>
    )
}
