import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {CgComment} from 'react-icons/cg';
import {getTime} from '../hooks/getTime';

export default function Blog({blog, reactions, children}) {
  const time = getTime(blog.blog_date);

  const renderedReactions = reactions.filter((reaction)=>{
    return reaction.blog_id === blog.id;
  })

  const like = renderedReactions.filter((reaction)=>{
    return reaction.reaction_type === 'like';
  })

  const dislike = renderedReactions.filter((reaction)=>{
    return reaction.reaction_type === 'dislike';
  })

  const [upvote, setUpvote] = useState(like.length);
  const [downvote, setDownvote] = useState(dislike.length);

  const handleReactionClick = async(reaction_type, purpose)=>{
    try {

      const body = {
        blog_id: blog.id,
        reaction_type,
        purpose
      } 
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blogs/reaction`, {
        method: 'POST',
        headers: {
          token: localStorage.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const parsedResponse = await response.json();
      console.log(parsedResponse);
      if(parsedResponse) {
        if(reaction_type === 'like'){
          setUpvote(upvote+1);
        } else if (reaction_type === 'dislike'){
          setDownvote(downvote+1);
        }
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div key={blog.id} className='blog-ctn'>
          <h4> {blog.user_name} </h4>
          <span className='date'> {time} </span>
          <div className='question'>
            <Link to={`/dashboard/blog/${blog.id}`} className='links'>
              {blog.question}
            </Link>
          </div>
          <div className='sec-2'>
            <div className='sec-3'>
              <span onClick={()=>handleReactionClick('like', 'blog')} className='num-ctn'>
                <AiOutlineLike />
                {upvote}
              </span>
              <span onClick={()=>handleReactionClick('dislike', 'blog')} className='num-ctn'>
                <AiOutlineDislike />
                {downvote}
              </span>
              <span className='num-ctn'>
              <CgComment />
              </span>
            </div>
            <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
              <Link className='links'>Comments</Link>
              {children && children}
            </div>
          </div>
        </div>
    )
}
