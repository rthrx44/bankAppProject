import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
    const [inputValue, setInputValue] = useState('')
    const [accountBalance, setAccountBalance] = useState(0)

    const onInputChange = (e) => {
        setInputValue(e.target.value)
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
                    <div className='card-con'>Card</div>
                    <div className='card-details-con'>Card Details</div>
                        <div>Account Number :</div>
                        <div>Account Name :</div>
                        <div>CVV :</div>
                </div>
                <div className='user-info'>
                    <div className='user-details-con'>User Details</div>
                        <div>Name :</div>
                        <div>Username :</div>
                        <div>Email :</div>
                    <div className='balance-con'>Account Balance</div>
                        <div>₱ {accountBalance}</div>
                        <input type='text' value={inputValue} onChange={onInputChange}></input>
                        <button onClick={onDeposit}>Deposit</button>
                        <button onClick={onWithdraw}>Withdraw</button>
                        <button>Send Money</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Dashboard