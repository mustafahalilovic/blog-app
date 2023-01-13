import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import SideBar from '../compontens/SideBar';
import Title from '../compontens/Title';
import LatestBlogsPage from './LatestBlogsPage';
import NewBlogPage from './NewBlogPage';
import MyBlogsPage from './MyBlogsPage';

export default function DashboardPage() {
  return (
    <div className='dash-ctn'>
      <Title />
      <div className='content'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<LatestBlogsPage />} />
          <Route exact path="/myblogs" element={<MyBlogsPage />} />
          <Route exact path="newblog" element={<NewBlogPage />} />
         </Routes>
      </div>
    </div>
  )
}
