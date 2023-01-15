import React, {useState} from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import SideBar from '../compontens/SideBar';
import Title from '../compontens/Title';
import LatestBlogsPage from './LatestBlogsPage';
import NewBlogPage from './NewBlogPage';
import MyBlogsPage from './MyBlogsPage';
import BlogPage from './BlogPage';
import { useSelector, useDispatch } from 'react-redux';
import {addBlog, removeBlog} from '../store';
import {ImProfile} from 'react-icons/im';

export default function DashboardPage({setAuth}) {
  const dispatch = useDispatch();

  const blogs = useSelector((state)=>{
    return state.blogs;
  });

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <div className='dash-ctn'>
      <Title />
      <div className='user'>
          <span> <ImProfile /> Mustafa</span>
          <button onClick={handleLogout}>logout</button>
        </div>
      <div className='content'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<LatestBlogsPage />} />
          <Route exact path="/myblogs" element={<MyBlogsPage />} />
          <Route exact path="/newblog" element={<NewBlogPage />} />
          <Route exact path="/blog/:id" element={<BlogPage />} />
         </Routes>
      </div>
    </div>
  )
}
