import React, {useState} from 'react';
import { getTime } from '../hooks/getTime';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';

export default function Comment({comment, comment_reactions}){
  
  const like = comment_reactions.filter((reaction)=>{
    return reaction.reaction_type === 'like';
  });
  
  const dislike = comment_reactions.filter((reaction)=>{
    return reaction.reaction_type === 'dislike';
  });
  const [upvote, setUpvote] = useState(like.length);
  const [downvote, setDownvote] = useState(dislike.length);
  console.log(upvote);
  const handleReactionClick = async(reaction_type, purpose)=>{
    try {

      const body = {
        blog_comment_id: comment.id,
        reaction_type,
        purpose
      } 
      console.log(body);
      
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
    <div key={comment.id} className='mb-3 blog comment'>
        <h4 className='m-0'> {comment.comusername} </h4>
        <span className='m-0 date'> {getTime(comment.comment_date)} </span>
        <div className='blog-text' style={{padding:'10px 5px'}}>
            {comment.comment}
        </div>
        <div className='sec-2'>
            <div className='sec-3'>
                <span onClick={()=>handleReactionClick('like', 'comment')} className='num-ctn'>
                    <AiOutlineLike />
                    {upvote}
                </span>
                <span onClick={()=>handleReactionClick('dislike', 'comment')} className='num-ctn'>
                     <AiOutlineDislike />
                    {downvote}
                </span>
            </div>
        </div> 
    </div>
  )
}
