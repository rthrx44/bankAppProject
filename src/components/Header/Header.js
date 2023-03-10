import './Header.css'
import { LoginBtn } from '../Buttons/Buttons'


function  Header (props) {
  const links = ['Home', 'About', 'Contact Us']

  return (
    <main className='header-container'>
      <div className='logo-container'>
        <i className='fa-solid fa-building-columns'></i> 
        <span className='logo-name'>Just Bank</span>
      </div>
      <div>
        <nav className='nav-container'>
          {links.map((text, index) => (
            <a href='/' key={index} className='navlinks'>{text}</a>
          ))}
          <LoginBtn/>
        </nav>
      </div>
    </main>
  )
}

export default Header