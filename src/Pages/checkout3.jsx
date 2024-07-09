
import React from 'react'
// import Hero from './Hero'
import Hero from '../components/Hero';
import CheckOuts3 from '../components/CheckOut3';


const CheckOut3 = ({heroCatalog}) => {
  return (
    <div>
        <Hero heroCatalog='CheckOut' />
        <CheckOuts3 />
    </div>
  )
}

export default CheckOut3
