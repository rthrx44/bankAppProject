import React from 'react'
import './Modal.css'
import { TiWarning } from "react-icons/ti";
import { CloseButton } from '../Buttons/Buttons';

const Modal = ({ closeModal, message = "Warning Error" }) => {
    const blurEffect = {
        position: "absolute",
        height: "91vh",
        width: "auto",
        backgroundColor: "transparent",
        opacity: "1" 
      }
    return (
        <div className='popUp-con' style={blurEffect}>
            <div className="popUp-container">
                <div className="popUp-modal flex-column">
                    <CloseButton onClickClose={closeModal} />
                    <div className=""><TiWarning fontSize="10rem" color="#008b8b"/></div>
                    <div className="popUp-text">{message}</div>        
                </div>
            </div>
        </div>
    );
}

export default Modal