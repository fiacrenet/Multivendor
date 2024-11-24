import React from 'react'

function PopularProduct() {
  return (
    <div className="popularproduct mt-4">
        <div className="container">
            <h3 className='mb-4'>Popular Products <a href='#' className='float-end btn  btn-dark mt-2'>View All Popular Products <i class="fa-solid fa-arrow-right"></i></a></h3>
            <div className="row">
                {/* Popular Product Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2qx_OjGWuvycRSt-a7qYie-WLmNXrQ5KFADqgIj2sTsD-0C34Jo67QQujjDf879UcBsnge3LWoRvRbSfNUVxepsSSCkgTVxR9gIktKPE4A7YU0oJo_Pt4Xw-Jm43XXPKhpziXA&usqp=CAc' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Product title</h4>
                            <h5 className="card-title text-muted text-center">Price : € 250 </h5>
                        </div>
                        <div className="card-footer">
                        <button title='Add to cart' className='btn btn-success btn-sm '><i className="fa-solid fa-cart-plus"></i></button>
                        <button title='Add to wishlist' className='btn btn-danger btn-sm ms-2  '><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>  
                {/* Popular Product Box End */}
                 {/* Popular Product Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Product title</h4>
                            <h5 className="card-title text-muted text-center">Price : € 250 </h5>
                        </div>
                        <div className="card-footer">
                        <button title='Add to cart' className='btn btn-success btn-sm '><i className="fa-solid fa-cart-plus"></i></button>
                        <button title='Add to wishlist' className='btn btn-danger btn-sm ms-2  '><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>  
                {/* Popular Product Box End */}
                 {/* Popular Product Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYcnziSDYQ3Y4-LQ0RiuA8f_btbBLATlWtQ&s' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Product title</h4>
                            <h5 className="card-title text-muted text-center">Price : € 250 </h5>
                        </div>
                        <div className="card-footer">
                        <button title='Add to cart' className='btn btn-success btn-sm '><i className="fa-solid fa-cart-plus"></i></button>
                        <button title='Add to wishlist' className='btn btn-danger btn-sm ms-2  '><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>  
                {/* Popular Product Box End */}
                 {/* Popular Product Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2qx_OjGWuvycRSt-a7qYie-WLmNXrQ5KFADqgIj2sTsD-0C34Jo67QQujjDf879UcBsnge3LWoRvRbSfNUVxepsSSCkgTVxR9gIktKPE4A7YU0oJo_Pt4Xw-Jm43XXPKhpziXA&usqp=CAc' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Product title</h4>
                            <h5 className="card-title text-muted text-center">Price : € 250 </h5>
                        </div>
                        <div className="card-footer">
                        <button title='Add to cart' className='btn btn-success btn-sm '><i className="fa-solid fa-cart-plus"></i></button>
                        <button title='Add to wishlist' className='btn btn-danger btn-sm ms-2  '><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>  
                {/* Popular Product Box End */}
            </div>
            <hr />
        </div>
    </div>
  )
}

export default PopularProduct
