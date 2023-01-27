import React from 'react'
import { SignUp } from '../../components/Buttons/Buttons'
import './SignupPage.css'
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";

function SignupPage() {
  return (
    <main>
        <section className='signup-section-con'>
            <div className='signup-con'>
                <div className='name-con'>
                    <span className='name-logo'><HiOutlineUserCircle/></span>
                    <input placeholder='Full Name'></input>
                </div>
                <div className='uname-con'>
                    <span className='uname-logo'><AiOutlineUser/></span>
                    <input placeholder='Username'></input>
                </div>
                <div className='email-con'>
                    <span className='email-logo'><AiOutlineMail/></span>
                    <input placeholder='Email'></input>
                </div>
                <div className='pass-con'>
                    <span className='pass-logo'><RiLockPasswordLine/></span>
                    <input placeholder='Password'></input>
                </div>
                <SignUp/>
            </div>
        </section>
    </main>
  )
}

export default SignupPage