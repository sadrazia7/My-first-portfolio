import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services'>
        <h1>My Service</h1>
        <div className="service-container">
            <div key={1} className="service-format">

            <h3>1</h3>
            <h2>Front</h2>
            <p>i can design your website</p>
            <p>read more</p>

            </div>

            <div key={2} className="service-format">

            <h3>2</h3>
            <h2>Backend</h2>
            <p>i can deploy your website</p>
            <p>read more</p>

            </div>

            <div key={3} className="service-format">

            <h3>3</h3>
            <h2>JavaFx</h2>
            <p>i can deploy App for you </p>
            <p>read more</p>

            </div>

            <div key={4} className="service-format">

            <h3>4</h3>
            <h2>Java</h2>
            <p> I know java </p>
            <p>read more</p>

            </div>
            
        </div>
        
    </div>
  )
}

export default Services