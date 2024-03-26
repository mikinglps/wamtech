import React from 'react'
import ProductSingle from '../ProductSingle/ProductSingle'
import './Products.css'

const Products = () => {
  return (
    <div className='products_wrapper'>
        <div className='products_first'>
            <h4>PRODUCTS</h4>
        </div>
        <ProductSingle logo='citrix.png' title='Lorem Ipsum' description='Sed a tellus leo. Donec at sollicitudin augue, nec egestas enim. Morbi pretium ut sapien at ultricies. Proin vitae elit vel est sodales tincidunt eget non dui. Nulla eu libero eleifend, vehicula lorem nec, finibus nisl. Curabitur vestibulum varius arcu,'/>
        <ProductSingle logo='github.png' title='Lorem Ipsum' description='Sed a tellus leo. Donec at sollicitudin augue, nec egestas enim. Morbi pretium ut sapien at ultricies. Proin vitae elit vel est sodales tincidunt eget non dui. Nulla eu libero eleifend, vehicula lorem nec, finibus nisl. Curabitur vestibulum varius arcu,'/>
        <ProductSingle logo='napster.png' title='Lorem Ipsum' description='Sed a tellus leo. Donec at sollicitudin augue, nec egestas enim. Morbi pretium ut sapien at ultricies. Proin vitae elit vel est sodales tincidunt eget non dui. Nulla eu libero eleifend, vehicula lorem nec, finibus nisl. Curabitur vestibulum varius arcu,'/>
    </div>   
  )
}

export default Products