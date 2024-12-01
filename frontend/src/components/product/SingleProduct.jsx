import React from 'react'
import { Link } from 'react-router-dom'

function SingleProduct(props) {
  return (
    <>
        {/* Product Box */}
        <div className="col-12 col-md-3 mb-4">
            <div className="card">
                  <Link to='/product/product1/1'>  
                    <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2qx_OjGWuvycRSt-a7qYie-WLmNXrQ5KFADqgIj2sTsD-0C34Jo67QQujjDf879UcBsnge3LWoRvRbSfNUVxepsSSCkgTVxR9gIktKPE4A7YU0oJo_Pt4Xw-Jm43XXPKhpziXA&usqp=CAc' className="card-img-top" alt="..." />
                  </Link>
                <div className="card-body">
                    <Link to='/product/product1/1'><h4 className="card-title text-center">{props.title}</h4></Link>
                    <h5 className="card-title text-muted text-center">Price : € 250 </h5>
                </div>
                <div className="card-footer">
                    <button title='Add to cart' className='btn btn-success btn-sm '><i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Add to wishlist' className='btn btn-danger btn-sm ms-2  '><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>  
        {/* Product Box End */}
    </>
  )
}

export default SingleProduct
