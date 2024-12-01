import React from 'react'
import LatestProduct from '../latest_product/LatestProduct'
import PopularCategory from '../popular_category/PopularCategory'
import PopularProduct from '../popular_product/PopularProduct'
import PopularSeller from '../popular_seller/PopularSeller'
import Rating from '../rating/Rating'

function Home() {
  return (
    <div className='home'>
        <LatestProduct />
        <PopularCategory />
        <PopularProduct />
        <PopularSeller />
        <Rating />
    </div>
  )
}

export default Home
