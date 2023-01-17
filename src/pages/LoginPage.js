import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage({setAuth}) {
  const [inputs, setInptus] = useState({
    email: '',
    password: ''
  });

  const {email, password} = inputs;

  const handleChange = (e)=>{
    setInptus({...inputs, 
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const body = {
      email,
      password
    }

    const response = await fetch('http://localhost:5000/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const parsedResponse = await response.json();

    localStorage.setItem('token', parsedResponse.token);
    setAuth(true);

  }

  return (
    <div className='reg-log-ctn'>
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input 
          name="email"
          type="email" 
          className="form-control" 
          placeholder="Enter email" 
          value={inputs.email}
          onChange={(e)=>handleChange(e)}
          />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
          name="password"
          type="password" 
          className="form-control" 
          placeholder="Password" 
          value={inputs.password}
          onChange={(e)=>handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/register">Don't have account?</Link>
      </form>
    </div>
  )
}
