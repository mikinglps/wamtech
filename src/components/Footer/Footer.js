import React from 'react'
import Button from '../Button/Button'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer_wrapper'>
        <div className='footer_left'>
            <h4>CONTACT US</h4>
        </div>
        <div className='footer_right'>
            <div className='footer_right--left'>
            <h2>Support</h2>
            <p>Icon <span>11 99999-9999</span> </p>
            <p>Icon <span>contato@wamtech.com.br</span></p>

            <h2>Sales</h2>
            <p>Icon <span>11 88888-8888</span></p>
            <p>Icon <span>sales@wamtech.com.br</span></p>

            <Button text='Entre em contato'/>
            </div>
            <div className='footer_right--right'>
                Mapa
            </div>
        </div>
    </div>
    <div className='footer_navbar'>
        <div className='footer_navbar_left'>
            <div className='footer_wrapper_logo'>
                <div className='footer_logo'/>
                <b>WAMTECH</b>
            </div>
        </div>
        <div className='footer_navbar_right'>
            <ul>
                <li>ABOUT US</li>
                <li>PRODUCTS</li>
                <li>PRESS</li>
                <li>CAREERS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer