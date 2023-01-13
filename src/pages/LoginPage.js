import React from 'react'

export default function LoginPage() {
  return (
    <div className='reg-log-ctn'>
      <h1>Login to your account</h1>
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" />
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
