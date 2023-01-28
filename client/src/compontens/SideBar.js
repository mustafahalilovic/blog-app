import React from 'react';
import {Link} from 'react-router-dom';
import {SiMicrodotblog} from 'react-icons/si';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {MdOutlineLibraryAdd} from 'react-icons/md';



export default function SideBar() {
  return (
    <div className='side-ctn'>
        <Link to="/dashboard/" className='link latest-link'>
           <SiMicrodotblog /> 
        </Link>
        <Link to="/dashboard/myblogs" className='link blogs-link'>
          <BsFillEnvelopeFill style={{fontSize:'2em'}} />
          My Blogs
        </Link>
        <Link to="/dashboard/newblog" className='link blogs-link'>
          <MdOutlineLibraryAdd style={{fontSize:'2em'}} />
          Add Blogs
        </Link>
    </div>
  )
}
