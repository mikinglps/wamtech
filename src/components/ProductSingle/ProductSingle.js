import React from 'react'
import Button from '../Button/Button';
import './ProductSingle.css'

const ProductSingle = ({logo, title, description}) => {
  return (
    <div className='products_single'>
            <div className='image_holder'>
                <img src={logo} alt='logo'/>
           </div>
           <h4>{title}</h4>
           <p>{description}</p>
           <Button text='Book your product'/>

    </div>
  )
}

export default ProductSingle