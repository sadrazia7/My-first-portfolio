import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {

  const [ menu , setmenu ] = useState("Home");
  const menuRef = useRef() ;

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }

  const closMenu = () => {
    menuRef.current.style.right = "-350px";

  }


  return (
    <div className='navbar'>
      <img className='nav-menu-mob' onClick={openMenu} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAH1JREFUWEft1UEKwCAMBVG9eW9ecdeFONQgJDDdhkj6/Gpvyb6ebJ7mQLQjCilEAlQvlaGX/iZYX2LshBxoipfKUDAiZ+0KkdtO6KHmYH25vsf+o/r7Yky3ZcGInLV77MmtlJCvPb326YQof1fqpUJ9RYAWVUghEqC6GSKhAeG2CiXgqE5rAAAAAElFTkSuQmCC"/>

      <img src="" alt="" />
      <ul className='nav-menu'>
      <img className='nav-menu-close' onClick={closMenu} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAJNJREFUWEftlMEOwCAIQ/XLtz/XmHh0lBUOmNRrFeqj2lux1Yv5aTKEJiJCIoQIIP2qDA10m6B+hGERkqFF/KoMBSPCHRchxI0h9KKiTv1YhzGU9R38/oe+LlrOULmROSPCbWMyxHVynpIhBCqb0Ar8g5puPe3ZW/1kyDkNflt2hngnVrDCVQMFRAjBEyERQgSQPgH4fwolQ+gRqQAAAABJRU5ErkJggg=="/>
      <li onClick={()=> setmenu("Home")}  className = {menu == "Home" ? "active" : ""}> <a href="#home"> Home </a>  </li>
      <li onClick={()=> setmenu("About Me")}  className = {menu == "About Me" ? "active" : ""}> <a href="#about">About Me</a> </li>
      <li onClick={()=> setmenu("Services")} className = {menu == "Services" ? "active" : ""}> <a href="#services"> Services </a> </li>
      <li onClick={()=> setmenu("Portfolio")}  className = {menu == "Portfolio" ? "active" : ""}> <a href="#work"> Portfolio </a> </li>
      <li onClick={()=> setmenu("Contact") }  className = {menu == "Contact" ? "active" : ""}> <a href="#contact"> Contact </a>   </li>
      
      </ul>
      <div className="nav-connect"> <a href="#contact"> Contact Me </a> </div>
    </div>
  )
}

export default Navbar