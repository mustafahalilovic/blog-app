import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';
import { removeBlog } from '../store';

export default function MyBlogsComponent({username}) {
  const dispatch = useDispatch();

  const blogs = useSelector((state)=>{
    return state.blogs.blogs.filter((blog)=>{
      return blog.user_name === username
    });
  });

  const reactions = useSelector((state)=>{
    return state.reaction.reactions;
  })

  const handleBlogDelete = async (id)=>{

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blogs/delete`, {
      method: 'DELETE',
      headers: {
        id,
        token: localStorage.token,
        'Content-Type': 'application/json'
      }
    })

    const parsedResponse = await response.json();

    if(parsedResponse){
      dispatch(removeBlog(id));
    }
    
  } 


  return (
    <div className='latest-ctn'>
        {blogs && 
          blogs.map((blog)=> 
          <Blog blog={blog} reactions={reactions && reactions}>
            <div>
              <button 
                onClick={()=>handleBlogDelete(blog.id)}
                className='btn btn-danger'>
                Delete
              </button>
            </div>
          </Blog>
        )
        }
    </div>
  )
}
