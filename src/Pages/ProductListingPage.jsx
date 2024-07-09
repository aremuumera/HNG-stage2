
import React from 'react'
import Hero from "../components/Hero";
import Sidebar from '../components/Sidebar'
import ProductList from '../components/productList';

const ProductListingPage = ({heroCatalog, cat1, cat2}) => {
  return (
    <div >
    <Hero heroCatalog='Product Catalog' cat1='Home/' cat2='Catalog' />
      <div className="mt-4 gap-[20px] flex items-start ">
        <div className="w-full md:w-1/4 sm:block hidden">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 sm:pr-[40px] sm:mx-[0px] mx-[15px] ">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage
