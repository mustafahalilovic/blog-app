import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {CgComment} from 'react-icons/cg';

export default function ReadBlog({blog}) {

 const renderedComments = blog.comments.map((comment)=>{
    return <div key={comment.id} className='blog comment'>
                <h4> {comment.comUsername} </h4>
                <span className='date'> {comment.time} </span>
                <div className='blog-text' style={{padding:'10px 5px'}}>
                {comment.comment}
                </div>
                <div className='sec-2'>
                    <div className='sec-3'>
                        <span className='num-ctn'>
                            <AiOutlineLike />
                            {comment.upvotes}
                        </span>
                        <span className='num-ctn'>
                            <AiOutlineDislike />
                            {comment.downvotes}
                        </span>
                    </div>
            </div> 
        </div>
 });

  return (
    <div>
       <div key={blog.id} className='blog'>
          <h4> {blog.username} </h4>
          <span className='date'> {blog.date} </span>
          <h4 className='question'>
              {blog.question}
          </h4>
          <div className='blog-text'>
            {blog.text}
          </div>
          <div className='comments'>
            <h3>Comments</h3>
            {renderedComments}
          </div>
        </div> 
     </div>
  )
}
