import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-up">
            <div className="footer-up-left">

              <p> $$ im exprienced dev in tehran and study in Amirkabir University with 10 years and assosiate with DigiKala , Alibaba etc ... </p>

            </div>

            <div className="footer-up-right">

              <div className="email-box">
                <input type="email" placeholder='Enter your email' />
              </div>

              <div className="subscribe">
                <label htmlFor="">Subscribe</label>
              </div>

            </div>
    
        </div>

        <hr />

        <div className="footer-down">

          <div className="footer-down-left">
            <p>sadra zia 2024 </p>

          </div>

          <div className="footer-down-right">

            <p>terms of service</p>
            <p>privacy policy</p>
            <p>connect with me</p>

          </div>

        </div>
    
    </div>
  )
}

export default Footer