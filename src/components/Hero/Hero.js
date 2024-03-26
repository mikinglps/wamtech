import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

export default function Hero() {
    return (
        <div>
            <Navbar/>
            <div className='hero_wrapper'>
                <div className='hero_left'>
                    <h2>CREATE SOFTWARE SOLUTION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='hero_right'>
                    
                </div>
            </div>
        </div>
    )
}