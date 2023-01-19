import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {CgComment} from 'react-icons/cg';
import { getTime } from '../hooks/getTime';
import { useSelector } from 'react-redux';

export default function ReadBlog({blog}) {
  const comments = useSelector((state)=>{
    return state.comments.comments;
  })
  const time = getTime(blog.blog_date);

  return (
    <div>
       <div key={blog.id} className='blog'>
          <h4> {blog.user_name} </h4>
          <span className='date'> {time} </span>
          <h4 className='question'>
              {blog.question}
          </h4>
          <div className='blog-text'>
            {blog.blog_text}
          </div>
          <div className='comments'>
            <h3>Comments</h3>
            {comments && 
              comments.map((comment)=>{
                return <div key={comment.id} className='blog comment'>
                            <h4> {comment.comUsername} </h4>
                            <span className='date'> {comment.comment_date} </span>
                            <div className='blog-text' style={{padding:'10px 5px'}}>
                            {comment.comment}
                            </div>
                            <div className='sec-2'>
                                <div className='sec-3'>
                                    <span className='num-ctn'>
                                        <AiOutlineLike />
                                        0
                                    </span>
                                    <span className='num-ctn'>
                                        <AiOutlineDislike />
                                        0
                                    </span>
                                </div>
                        </div> 
                    </div>
             })
            }
          </div>
        </div> 
     </div>
  )
}
