
import React from 'react'
// import Hero from './Hero'
import Hero from '../components/Hero';
import CheckOuts2 from '../components/checkOuts2';


const CheckOut2 = ({heroCatalog}) => {
  return (
    <div>
        <Hero heroCatalog='CheckOut' />
        <CheckOuts2 />
    </div>
  )
}

export default CheckOut2
