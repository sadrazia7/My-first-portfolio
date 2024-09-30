import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>

        <h1> About me </h1>
        
        <div className="about-section">
            <div className="left-section">
            <img   className='prof' src="./src/assets/prof.JPG" alt="" />
            </div>
            <div className="right-section">
                <div className="about-right">
                <p> im the best</p>
                <p> try to be like me</p>
                </div>
                <div className="skills">
                    <div className='skill'> <p>Html & Css</p> <hr style={{width:"80%" , borderRadius:"20px", backgroundColor:"aqua"}}/> </div>
                    <div className='skill'> <p>React Js</p> <hr style={{width:"70%" , borderRadius:"20px", backgroundColor:"aqua"}}/> </div>
                    <div className='skill'> <p>C</p> <hr style={{width:"70%", borderRadius:"20px", backgroundColor:"aqua"}}/> </div>
                    <div className='skill'> <p>Java</p> <hr style={{width:"80%" , borderRadius:"20px", backgroundColor:"aqua"}}/> </div>
                    <div className='skill'> <p>javascript </p> <hr style={{width:"60%" , borderRadius:"20px", backgroundColor:"aqua"}}/> </div>
                </div>
            </div>
        </div>
        <div className="achievments">
            <div className="achievment">
                <h1>+4</h1>
                <p>Projects</p>
                
            </div>
            <hr />
            
            <div className="achievment">
                <h1>+1</h1>
                <p>Happy clients</p>
                
            </div>

            <hr />
            
            <div className="achievment">
                <h1>+2</h1>
                <p>Years exprience</p>
                
            </div>

        

        </div>

    </div>
  )
}

export default About