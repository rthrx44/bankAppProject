import React from 'react'
import './Header.css'
import { Login, SignUp } from '../Buttons/Buttons'



function  Header () {
  return (
    <header className='header-container'>
      <div className='logo-container'>
        <i className="fa-solid fa-building-columns"></i> 
        <span className='logo-name'>Just Bank</span>
      </div>
      <Login/>
      <SignUp/>
    </header>
  )
}

export default Header