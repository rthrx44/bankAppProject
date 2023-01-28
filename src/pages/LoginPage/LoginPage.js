import React from 'react'
import { LoginBtn } from '../../components/Buttons/Buttons'
import './LoginPage.css'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginPage() {
  return (
    <main>
        <section className='login-section-con'>
            <div className='login-con'>
                <div className='username-con'>
                    <span className='username-logo'><AiOutlineUser/></span>
                    <input placeholder='Username'></input>
                </div>
            <div className='password-con'>
                <span className='password-logo'><RiLockPasswordLine/></span>
                <input placeholder='Password'></input>
            </div>
            <LoginBtn/>
            <div className='option-con'>
                <button className='rBtn'>Register Now</button>
                <span>Forgot<button className='uBtn'>Username</button><span>or</span><button className='pBtn'>Password</button></span>
            </div>
        </div>
    </section>
    </main>
  )
}

export default LoginPage