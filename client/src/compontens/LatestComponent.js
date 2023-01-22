import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import Blog from '../compontens/Blog';
import {addReaction} from '../store';

export default function LatestComponent() {
  const dispatch = useDispatch();

  const blogs = useSelector((state)=>{
    return state.blogs.blogs;
  });
  const reactions = useSelector((state)=>{
    return state.reaction.reactions;
  })


  useEffect(()=>{
    fetchReactions();
  }, []);

  const fetchReactions = async ()=>{
    try {
      
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blogs/allreactions`,{
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();
      dispatch(addReaction(parsedResponse));

    } catch (error) {
      console.log(error.message);
    }
  }
 
  return (
    <div className='latest-ctn'>
        {blogs &&  blogs.map(blog => <Blog blog={blog} reactions={reactions && reactions} />)}
    </div>
  )
}
