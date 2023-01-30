import React from 'react'
import { SignUpBtn } from '../../components/Buttons/Buttons'
import './SignupPage.css'
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import useLocalStorage from '../../Utilities/useLocalSotrage'

function SignupPage({handlePageChange}) {
    const [value, setValue] = useLocalStorage('')

    
  return (
    <main>
        <section className='signup-section-con'>
            <div className='signup-con'>
                <div className='name-con'>
                    <span className='name-logo'><HiOutlineUserCircle/></span>
                    <input placeholder='Full Name' type='text'></input>
                </div>
                <div className='uname-con'>
                    <span className='uname-logo'><AiOutlineUser/></span>
                    <input placeholder='Username' type='text'></input>
                </div>
                <div className='email-con'>
                    <span className='email-logo'><AiOutlineMail/></span>
                    <input placeholder='Email' type='text'></input>
                </div>
                <div className='email-con'>
                    <span className='email-logo'><AiOutlineMail/></span>
                    <input placeholder='Confirm Email' type='text'></input>
                </div>
                <div className='pass-con'>
                    <span className='pass-logo'><RiLockPasswordLine/></span>
                    <input placeholder='Password' type='password'></input>
                </div>
                <SignUpBtn handlePageChange={handlePageChange} login={'login'}/>
            </div>
        </section>
    </main>
  )
}

export default SignupPage