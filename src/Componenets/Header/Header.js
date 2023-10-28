import React from 'react'
import  './Header.css'

function Header() {
  return (
    <div className='header'>
        <img  className="logo" src="image/bb8.png" />
        <ul className='header-menu'>
          <li>Home</li>
          <li>Services</li>
          <li>Why Us</li>
          <li>Testimonials</li>
          </ul>
          
      

    </div>
  )
}

export default Header