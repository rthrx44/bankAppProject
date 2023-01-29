import React from 'react'
import './Buttons.css'


export const LoginBtn = ({login, handlePageChange}) => {


  return (
    <div className='login-container'>
      <button className='loginBtn' onClick={() => handlePageChange(login)}>Login</button>
    </div>
  )
}



export const SignUpBtn = ({login, handlePageChange}) => {
  return (
    <div className='signup-container'>
      <button className='signupBtn' onClick={() => handlePageChange(login)}>Sign Up</button>
    </div>
  )
}

export const SignInBtn = ({dashb, handlePageChange}) => {
  return (
    <div className='signin-container'>
      <button className='signinBtn' onClick={() => handlePageChange(dashb)}>Login</button>
    </div>
  )
}
