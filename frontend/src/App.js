import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/Navbar'
import LatestProduct from './components/latest_product/LatestProduct'
import PopularCategory from './components/popular_category/PopularCategory'
import PopularProduct from './components/popular_product/PopularProduct'
import PopularSeller from './components/popular_seller/PopularSeller'

const App = () => {
  return (
    <div>
      <Navbar />
      <LatestProduct />
      <PopularCategory />
      <PopularProduct />
      <PopularSeller />
    </div>
  )
}

export default App
