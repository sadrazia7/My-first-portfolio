import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="./src/assets/prof.JPG" alt="" />
        <h1> <span> im Sadra zia </span> , front and backend developer</h1>
        <p>im living in tehran , study bachlor of camputer engeeniring in polytechnic tehran</p>
        <div className="hero-action">
        <div className="connect-me">Connect with me</div>
        <div className="myresume"> My resume</div>
        </div>
        
    </div>
  )
}

export default Hero