import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage({setAuth}) {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = inputs;

  const handleChange = (e)=>{
    setInputs({...inputs, 
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {

      const body = {
        name, 
        email,
        password
      }

      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const parsedResponse = await response.json();
  
      localStorage.setItem('token', parsedResponse.token);
      setAuth(true);
      
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div>
      <div className='reg-log-ctn'>
        <h1>Register to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input 
            name='email'
            type="email" 
            className="form-control" 
            placeholder="Enter email"
            value={inputs.email}
            onChange={(e)=>handleChange(e)} 
            />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input 
            name='name'
            type="text" 
            className="form-control" 
            placeholder="Enter username"
            value={inputs.name}
            onChange={(e)=>handleChange(e)}
             />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
            name='password'
            type="password" 
            className="form-control" 
            placeholder="Password" 
            value={inputs.password}
            onChange={(e)=>handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/">Login to existing account</Link>
        </form>
    </div>
    </div>
  )
}
