import React from 'react'
import { Link } from 'react-router-dom';
import ButtonQuatity from '../button/ButtonQuatity';
import RelatedProduct from '../relatedproduct/RelatedProduct';
import PopularProduct from '../popular_product/PopularProduct';

function ProductDetails() {
  return (
    <div className='productdetail'>
      <section className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div id="productThumbnailSlider" className="carousel carousel-dark slide my-4 p-5" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" 
                    className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                     <img className='img-thumbnail card-img-top' src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2qx_OjGWuvycRSt-a7qYie-WLmNXrQ5KFADqgIj2sTsD-0C34Jo67QQujjDf879UcBsnge3LWoRvRbSfNUVxepsSSCkgTVxR9gIktKPE4A7YU0oJo_Pt4Xw-Jm43XXPKhpziXA&usqp=CAc'  alt="..." />
		                </div>
                    <div className="carousel-item">
                      <img className='img-thumbnail card-img-top' src='https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg'  alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img className='img-thumbnail card-img-top' src='https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg'  alt="..." />                       
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>
          <div className="col-8">
          <h3>Product Title</h3>
          <p>Product description</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h5 className="card-title">Price : € 250 </h5>
            <ButtonQuatity />
            <p className="mt-3">
              <button title='Add to Cart' className='btn btn-primary btn-sm'> 
              <i className="fa-solid fa-cart-plus"></i>Add to Cart</button>
              <button title='Buy Now' className='btn btn-success btn-sm ms-1'> 
              <i class="fa-solid fa-credit-card"></i>Buy Now</button>
              <button title='Add to wishlist' className='btn btn-danger btn-sm ms-1'>
              <i className="fa-solid fa-heart"></i> Wishlist </button>
            </p>
            <div className="producttags mt-3">
              <h5> Tags </h5>
              <p>
                <Link to='#' className='badge bg-secondary text-white me-1'>Iphone</Link>
                <Link to='#' className='badge bg-secondary text-white me-1'>Samsung</Link>
                <Link to='#' className='badge bg-secondary text-white me-1'>Huawei</Link>
                <Link to='#' className='badge bg-secondary text-white me-1'>Lave linge</Link>
                <Link to='#' className='badge bg-secondary text-white me-1'>Macbook pro</Link>
                <Link to='#' className='badge bg-secondary text-white me-1'>Asus</Link>
              </p>
            </div>
          </div>
        </div>
        <RelatedProduct />
        <PopularProduct />
      </section>
    </div>
  );
}

export default ProductDetails
