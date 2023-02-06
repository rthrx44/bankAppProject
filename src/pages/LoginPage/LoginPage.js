import React, { useState, useEffect } from 'react'
import { SignInBtn } from '../../components/Buttons/Buttons'
import './LoginPage.css'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginPage() {
    const [signUp, setSignUp,] = useState(false);
    
    const [userProfile, setUserProfile] = useState({
        userName: '',
        password: ''
    })

    useEffect(() => {
        JSON.parse(localStorage.getItem('registeredUsers'));
        return () => {};
    }, [signUp]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <main>
        <section className='login-section-con'>
            <form className='login-con' onSubmit={handleSubmit}>
                <div className='username-con'>
                    <label className='username-logo'><AiOutlineUser/></label>
                    <input 
                        placeholder='Username' 
                        type='text'
                        onChange={(e) => setUserProfile(() => {
                            userProfile.userName = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <div className='password-con'>
                    <label className='password-logo'><RiLockPasswordLine/></label>
                    <input 
                        placeholder='Password' 
                        type='password'
                        onChange={(e) => setUserProfile(() => {
                            userProfile.password = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <SignInBtn type='submit'/>
                <div className='option-con'>
                    <button className='rBtn'>
                    Register Now</button>
                    <span>Forgot<button className='uBtn'>Username</button><span>or</span><button className='pBtn'>Password</button></span>
                </div>
            </form>
        </section>
    </main>
  )
}

export default LoginPage