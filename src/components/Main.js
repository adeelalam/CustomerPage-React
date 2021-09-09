import React from 'react'
import Order from './Order'
import Footer from './Footer'


function Main() {
    return (
        <div className='main'>
            <div className="flex-container">
            <div className="card">
                <div className="inline">
                    <span>
                      <img src="EmailPhone.svg"/>
                    </span>
                    <span>
                      <h3>Contact Anna</h3>
                    </span>
                </div>
                <p>annaanne@qliro.com</p>
                <p>+46721234567</p>
            </div>
            <div className="card">
                <div className="inline">
                    <span>
                      <img src="../Assets/Shipping.svg"/>
                    </span>
                    <span>
                      <h3>Shipping address</h3>
                    </span>
                </div>
                <p>Qlirovägen 123, </p>
                <p>12345 Stockholm, Sweden</p>
            </div>
            <div className="card">
                <div className="inline">
                    <span>
                      <img src="../Assets/Invoice.svg"/>
                    </span>
                    <span>
                      <h3>Invoice Address</h3>
                    </span>
                </div>
                <p>Qlirovägen 123, </p>
                <p>12345 Stockholm, Sweden</p>
            </div>
          </div>
            
          <hr />
          <Order/>
          <Footer/>  
        </div>
    )
}

export default Main
