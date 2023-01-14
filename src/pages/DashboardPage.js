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

export default function DashboardPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      username: 'Mustafa',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          comUsername: 'Pero',
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          upvotes: 10,
          downvotes: 2,
          time: '10 minutes ago'
        }
      ],
      upvotes: 10,
      downvotes: 2,
      date: '3 minutes ago'
    },
    {
      id: 2,
      username: 'Huso',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 2,
          comUsername: 'Pero',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          upvotes: 10,
          downvotes: 2,
          time: '11h ago'
        }
      ],
      upvotes: 10,
      downvotes: 2,
      date: '2h ago'
    },
    {
      id: 3,
      username: 'Ramiz',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 3,
          comUsername: 'Pero',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          upvotes: 10,
          downvotes: 2,
          time: '2 seconds ago'
        }
      ],
      upvotes: 10,
      downvotes: 2,
      date: '1h ago'
    },
    {
      id: 4,
      username: 'Stojan',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 4,
          comUsername: 'Pero',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          upvotes: 10,
          downvotes: 2,
          time: '1h ago'
        }
      ],
      upvotes: 10,
      downvotes: 2,
      date: '1h ago'
    }
  ]);

  return (
    <div className='dash-ctn'>
      <Title />
      <div className='content'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<LatestBlogsPage blogs={blogs} />} />
          <Route exact path="/myblogs" element={<MyBlogsPage />} />
          <Route exact path="/newblog" element={<NewBlogPage />} />
          <Route exact path="/blog/:id" element={<BlogPage blogs={blogs} />} />
         </Routes>
      </div>
    </div>
  )
}
