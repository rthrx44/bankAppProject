import { useState } from 'react'
import './Dashboard.css'
import cardchip from '../../assests/img/cardchip.png'
import mlogo from '../../assests/img/mlogo.png'
import depositmoney from '../../assests/img/depositmoney.png'
import withdrawmoney from '../../assests/img/withdrawmoney.png'
import sendmoney from '../../assests/img/sendmoney.png'

function Dashboard() {
    const [inputValue, setInputValue] = useState('')
    const [accountBalance, setAccountBalance] = useState(0)

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        const result = e.target.value.replace(/\D/g, '');
        setInputValue(result);
    }

    const onDeposit = () => {
        setAccountBalance(accountBalance + +inputValue)
    }

    const onWithdraw = () => {
        if (inputValue > accountBalance) {
            return alert("Error: Insufficient funds")
        }
        setAccountBalance(accountBalance - +inputValue)
    }
  return (
    <main>
        <section className='dashboard-section-con'>
            <div className='dashboard-con'>
                <div className='card-info'>
                    <div className='card-con'>
                        <div className='cardface'>
                            <div className='cardlogo'>
                                <i className='fa-solid fa-building-columns'></i> 
                                <span className='logo-name'>Just Bank</span>
                            </div>
                            <div className='cardchip'>
                                <img 
                                    src={cardchip} 
                                    alt='goldchip' 
                                    className='chip'/>
                            </div>
                            <div className='cardfacedetails'>
                                <section className='c-info'>
                                    <div className='cardnumber'>1234 5678 9012 3456</div>
                                    <div className='cardholdername'>RUTHER DIO</div>
                                    <div className='cardvalidthru'>VALID THRU 31/29</div>
                                </section>
                                <div className='card-logo'>
                                    <img 
                                        src={mlogo} 
                                        alt='master card logo' 
                                        className='mclogo'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cdetails-con'>
                        <div className='card-details-con'>Card Information
                            <div className='card-details'>
                                <div className='cdetails'>Account Number : <div>1234 5678 9012 3456</div></div>
                                <div className='cdetails'>Account Name : <div>RUTHER DIO</div></div>
                                <div className='cdetails'>Valid Thru : <div>31/29</div></div>
                                <div className='cdetails'>CVV (Three Digit Security Code) : <div>064</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-con'>
                    <div className='user-info'>
                        <div className='user-details-con'>
                            <div>Hi Name!</div>
                            <div className='balance-con'>
                                <div 
                                    className='amounttext'>₱ {accountBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                            </div>
                        </div>
                        <div className='transacbtn'>
                            <input 
                                type='text' 
                                placeholder='Enter Amount'
                                className='inputamount'
                                value={inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                                onChange={onInputChange}>
                            </input>
                            <div className='userbtn'>
                                <button
                                    className='depositbtn'
                                    onClick={onDeposit}>
                                    <img 
                                        src={depositmoney} 
                                        alt='deposit money'
                                        className='dplogo'
                                    />
                                        Deposit Money
                                </button>
                                <button
                                    className='withdrawbtn'
                                    onClick={onWithdraw}>
                                        <img 
                                        src={withdrawmoney} 
                                        alt='withdraw money'
                                        className='wdlogo'
                                    />
                                        Withdraw Money
                                </button>
                                <button 
                                    className='sendmoneybtn'>
                                        <img 
                                        src={sendmoney} 
                                        alt='send money'
                                        className='smlogo'
                                    />
                                        Send Money
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Dashboard