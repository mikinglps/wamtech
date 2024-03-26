import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_left'>
            <div className='wrapper_logo'>
                <div className='logo'/>
                <b>WAMTECH</b>
            </div>
        </div>
        <div className='navbar_right'>
        <ul>
            <li>ABOUT US</li>
            <li>PRODUCTS</li>
            <li>PRESS</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar