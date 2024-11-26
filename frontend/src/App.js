import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/navbar/Navbar'
import LatestProduct from './components/latest_product/LatestProduct'
import PopularCategory from './components/popular_category/PopularCategory'
import PopularProduct from './components/popular_product/PopularProduct'
import PopularSeller from './components/popular_seller/PopularSeller'
import Rating from './components/rating/Rating'

const App = () => {
  return (
    <div>
      <Navbar />
      <LatestProduct />
      <PopularCategory />
      <PopularProduct />
      <PopularSeller />
      <Rating />
    </div>
  )
}

export default App
