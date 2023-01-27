import React from 'react'
import './Dashboard.css'

function Dashboard() {
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
                        <div>₱ 0</div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Dashboard