import React from 'react'
import './Mywork.css'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>MyWork</h1>
        </div>
        <div className="mywork-container">
            <img key={1} src="src\assets\marginfy.JPG" alt="marginft.com" />
        </div>
        <div className="read-showmore">
            <p>show more</p>
        </div>
    </div>
  )
}

export default Mywork