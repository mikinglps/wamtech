import React from 'react'
import './About.css'
import Button from '../Button/Button'

const About = () => {
  return (
    <div className='about_wrapper'>
        <div className='about_left'>
            <div className='row row_top'>
                <div className='content'>
                    <h3>ABOUT US</h3>
                </div>
                <div className='content'>

                </div>
            </div>
            <div className='row row_bottom'>
                <div className='content'>

                </div>
            </div>
        </div>
        <div className='about_right'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultrices tellus sed ultricies.</h3>
            <p>Phasellus eleifend congue purus, et aliquam risus placerat elementum. Praesent eleifend semper lectus non eleifend. Morbi pretium pretium enim, quis faucibus sem ultricies ut. Ut ullamcorper dapibus felis, at blandit massa sodales a. Sed in fringilla ligula, scelerisque semper orci.</p>
            <Button text='Read More' />
        </div>
    </div>
  )
}

export default About