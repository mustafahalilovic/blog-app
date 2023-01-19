import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from './Modal';

export default function NewBlogComponent({username}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [inputs, setInputs] = useState({
    title: '',
    blog: ''
  });

  const handleClose = ()=>{
    setShowModal(false);
    navigate('/dashboard');
  }

  const handleChange = (e)=>{
    setInputs({...inputs,
      [e.target.name]: e.target.value
    });
  }

  const addData = async ({blog, title}) =>{
    try {
      const newBlog =  {
        user_name: username,
        question: title,
        blog_text: blog,
        date: Date.now()
      }
  
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blogs/add`, {
        method: 'POST',
        headers: {token: localStorage.token, "Content-Type": "application/json"},
        body: JSON.stringify(newBlog)
      });
  
      const parsedResponse = await response.json();

    } catch (error) {
        console.log(error.message);
    }
  }

  const handleSubmit = (e)=>{
    addData(inputs);
    handleClose();
  }

  const modal = <Modal onClose={handleClose}>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input 
          name='title'
          className='form-control' 
          type="text"
          value={inputs.title}
          onChange={(e)=>handleChange(e)} 
        />
      </div>
      <div className='form-group'>
        <label>Blog</label>
        <textarea 
          name='blog'
          className='form-control' 
          value={inputs.blog}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <button type="submit" style={{marginTop:'10px', width:'100%'}} className='btn btn-primary'>Submit</button>
    </form>
  </Modal>

  return (
    <div>
      {showModal && modal}
    </div>
  )
}
