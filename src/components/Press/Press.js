import React from 'react'
import Button from '../Button/Button'
import './Press.css'

const Press = () => {
  return (
    <div className='press_wrapper'>
        <div className='press_left'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultrices tellus sed ultricies.</h3>
            <p>Phasellus eleifend congue purus, et aliquam risus placerat elementum. Praesent eleifend semper lectus non eleifend. Morbi pretium pretium enim, quis faucibus sem ultricies ut. Ut ullamcorper dapibus felis, at blandit massa sodales a. Sed in fringilla ligula, scelerisque semper orci.</p>
            <Button text='Read More' />
        </div>
        <div className='press_right'>
            <div className='row row_top'>
                <div className='content'>
                    <h3>PRESS</h3>
                </div>
                <div className='content'>

                </div>
            </div>
            <div className='row row_bottom'>
                <div className='content'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Press