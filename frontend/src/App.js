import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/Navbar'
import LatestProduct from './components/latest_product/LatestProduct'

const App = () => {
  return (
    <div>
      <Navbar />
      <LatestProduct />
    </div>
  )
}

export default App
