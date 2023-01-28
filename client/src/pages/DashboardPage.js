import React, {useEffect, useState} from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import SideBar from '../compontens/SideBar';
import Title from '../compontens/Title';
import LatestComponent from '../compontens/LatestComponent';
import NewBlogComponent from '../compontens/NewBlogComponent';
import MyBlogsComponent from '../compontens/MyBlogsComponent';
import BlogComponent from '../compontens/BlogComponent';
import {ImProfile} from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from '../store';

export default function DashboardPage({setAuth}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  useEffect(()=>{
    getProfile();
    fetchBlogs();
  });

  const getProfile = async()=>{
    try {
  
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/username`,{
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      });
  
      const parsedResponse = await response.json();

      setUsername(parsedResponse.user_name);
      
    } catch (error) {
      console.log(error.message);
    }
  }


  const fetchBlogs = async ()=>{
    try {
      
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blogs/allblogs`, {
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();

      dispatch(addBlog(parsedResponse));

    } catch (error) {
        console.log(error.message);
    }
  }

  

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <div className='dash-ctn'>
      <Title />
      <div className='user'>
          <span> <ImProfile /> {username}</span>
          <button onClick={handleLogout}>logout</button>
        </div>
      <div className='content'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<LatestComponent />} />
          <Route exact path="/myblogs" element={<MyBlogsComponent username={username} />} />
          <Route exact path="/newblog" element={<NewBlogComponent username={username} />} />
          <Route exact path="/blog/:id" element={<BlogComponent name={username} />} />
         </Routes>
      </div>
    </div>
  )
}
