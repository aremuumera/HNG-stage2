import React from 'react'
import Hero from "../components/Hero";
import ShoppingCarts from '../components/ShoppingCart';


const ShoppingCart = ({heroCatalog}) => {
  return (
    <div>
       <Hero heroCatalog='Shopping Cart' />
       <ShoppingCarts />
    </div>
  )
}

export default ShoppingCart
