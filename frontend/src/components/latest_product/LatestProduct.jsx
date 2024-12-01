import React from 'react'
import SingleProduct from '../product/SingleProduct'
import { Link } from 'react-router-dom'

function LatestProduct() {
  return (
    <div className="latesproduct mt-4">
        <div className="container">
            <h3 className='mb-4'>Latest Products <Link to='products' className='float-end btn  btn-dark mt-2'>View All Products <i className="fa-solid fa-arrow-right"></i></Link></h3>
            <div className="row">
                {/* Product Box */}
                <SingleProduct title='Product 1'/>
                <SingleProduct title='Product 2'/>
                <SingleProduct title='Product 3'/>
                <SingleProduct title='Product 4'/>
                <SingleProduct title='Product 5'/>
                <SingleProduct title='Product 6'/>
                <SingleProduct title='Product 7'/>
                <SingleProduct title='Product 8'/>
                {/* Product Box End */}
            </div>    
            <hr /> 
        </div>
    </div>
      
  )
}

export default LatestProduct
