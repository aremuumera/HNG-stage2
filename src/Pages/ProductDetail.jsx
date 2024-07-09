
import React from 'react'
import Hero from '../components/Hero'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import box4 from '../assets/box4.png'
import ProductDetails from '../components/ProductDetail'


const ProductDetail = ({heroCatalog}) => {
  return (
    <div>
      <Hero heroCatalog='ProductDetail' />
      <ProductDetails />
    </div>
  )
}

export default ProductDetail
