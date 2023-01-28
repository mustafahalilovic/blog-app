import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router';
import ReadBlog from './ReadBlog';
import { addComment } from '../store';
import {addReaction} from '../store';

export default function BlogComponent({name}) {
  const dispatch = useDispatch();
  const params = useParams();

  const blogs = useSelector((state)=>{
    return state.blogs.blogs;
  });

  const comments = useSelector((state)=>{
    return state.comments.comments;
  });

  const reactions = useSelector((state)=>{
    return state.reaction.reactions;
  });

  console.log(reactions);

  useEffect(()=>{
    fetchComments();
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

  const fetchComments = async()=>{
    try {
      
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/comments/get`, {
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();

      if(parsedResponse){
        dispatch(addComment(parsedResponse));
      }

    } catch (error) {
      console.log(error.message);
    }
  }
  

    if(!blogs) return;

    const renderedBlog = blogs.filter((blog)=>{
      return blog.id === params.id;
    });
  

  return (
    <div className='blog-page'>
      <ReadBlog 
      blog={renderedBlog[0]} 
      name={name && name}  
      comments={comments && comments}
      reactions={reactions}
      />
    </div>
  )
}
