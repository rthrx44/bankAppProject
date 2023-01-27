import React from 'react'
import './Header.css'
import { Login } from '../Buttons/Buttons'


function  Header () {
  const links = ['Home', 'About', 'Contact Us']

  return (
    <main className='header-container'>
      <div className='logo-container'>
        <i className='fa-solid fa-building-columns'></i> 
        <span className='logo-name'>Just Bank</span>
      </div>
      <div>
        <nav className='nav-container'>
          {links.map(text => (
            <a href='/' className='navlinks'>{text}</a>
          ))}
          <Login/>
        </nav>
      </div>
    </main>
  )
}

export default Header