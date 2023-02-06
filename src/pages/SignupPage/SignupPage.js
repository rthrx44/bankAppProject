import { useState } from 'react'
import { SignUpBtn } from '../../components/Buttons/Buttons'
import './SignupPage.css'
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import Modal from '../../components/Modals/Modal';

function SignupPage() {
    const [modalInvalidFields, setModalInvalidFields] = useState(false);

    const [userProfile, setUserProfile] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
    })

    const handleClosePopUp = (e) => {
        setModalInvalidFields(false);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const filteredUser = user.find(obj => 
            (obj.email === userProfile.email || obj.userName === userProfile.userName)
            )
        if (!userProfile.fullName || !userProfile.userName || !userProfile.email || !userProfile.password) {
            setModalInvalidFields(true);
        } else if (filteredUser !== undefined) {
            alert('user/email already exist')
        } else {
            user.push(userProfile);
            localStorage.setItem("registeredUsers", JSON.stringify(user));
        }
    }

  return (
    <main>
        <section className='signup-section-con'>
            <form className='signup-con' onSubmit={handleSubmit}>
                <div className='name-con'>
                    <label className='name-logo'><HiOutlineUserCircle/></label>
                    <input 
                        placeholder='Full Name' 
                        type='text' 
                        onChange={(e) => setUserProfile(() => {
                            userProfile.fullName = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <div className='uname-con'>
                    <label className='uname-logo'><AiOutlineUser/></label>
                    <input 
                        placeholder='Username'
                        type='text'
                        onChange={(e) => setUserProfile(() => {
                            userProfile.userName = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <div className='email-con'>
                    <label className='email-logo'><AiOutlineMail/></label>
                    <input 
                        placeholder='Email' 
                        type='text'
                        onChange={(e) => setUserProfile(() => {
                            userProfile.email = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <div className='pass-con'>
                    <label className='pass-logo'><RiLockPasswordLine/></label>
                    <input 
                        placeholder='Password' 
                        type='password'
                        onChange={(e) => setUserProfile(() => {
                            userProfile.password = e.target.value
                            return userProfile
                        })}
                        />
                </div>
                <SignUpBtn type='submit'/>
            </form>
            {modalInvalidFields && <Modal closeModal={handleClosePopUp} message="Please Fill Up Required Fields Properly!"/>}
        </section>
    </main>
  )
}

export default SignupPage