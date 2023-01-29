import React from 'react'
import { SignInBtn } from '../../components/Buttons/Buttons'
import './LoginPage.css'
import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginPage({handlePageChange}) {
  return (
    <main>
        <section className='login-section-con'>
            <div className='login-con'>
                <div className='username-con'>
                    <span className='username-logo'><AiOutlineUser/></span>
                    <input placeholder='Username' type='text'></input>
                </div>
            <div className='password-con'>
                <span className='password-logo'><RiLockPasswordLine/></span>
                <input placeholder='Password' type='password'></input>
            </div>
            <SignInBtn handlePageChange={handlePageChange} dashb={'dashb'}/>
            <div className='option-con'>
                <button className='rBtn' onClick={() => handlePageChange('signup')}>Register Now</button>
                <span>Forgot<button className='uBtn'>Username</button><span>or</span><button className='pBtn'>Password</button></span>
            </div>
        </div>
    </section>
    </main>
  )
}

export default LoginPage