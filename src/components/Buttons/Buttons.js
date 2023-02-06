import React from 'react'
import './Buttons.css'
import { SiIfixit } from "react-icons/si";


export const LoginBtn = () => {
  return (
    <div className='login-container'>
      <button className='loginBtn'>Login</button>
    </div>
  )
}

export const SignUpBtn = () => {
  return (
    <div className='signup-container'>
      <button className='signupBtn'>Sign Up</button>
    </div>
  )
}

export const SignInBtn = () => {
  return (
    <div className='signin-container'>
      <button className='signinBtn'>Login</button>
    </div>
  )
}

export const CloseButton = ({onClickClose}) => {
  return (
    <div className="close-container" >
      <button
        onClick={onClickClose}
        className="btn-close"
      >
        <SiIfixit color="#008b8b" fontSize="3rem"/>
      </button>
    </div>
  )
}
