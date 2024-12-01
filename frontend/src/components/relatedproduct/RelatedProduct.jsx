import React from 'react'
import SingleProduct from '../product/SingleProduct'
function RelatedProduct() {
  return (
    <div className='related-product' id='relatedproduct'>
        <section className="container">
        <h3 className='mt-4'> Related Products </h3>
            <div id="productRelatedSlider" className="carousel slide carousel-fade p-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row">
                            <SingleProduct title='Electro Product 1'/>
                            <SingleProduct title='Electro Product 2'/>
                            <SingleProduct title='Electro Product 3'/>  
                            <SingleProduct title='Electro Product 4'/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row">
                            <SingleProduct title='Electro Product 5'/>
                            <SingleProduct title='Electro Product 6'/>
                            <SingleProduct title='Electro Product 7'/>  
                            <SingleProduct title='Electro Product 8'/>
                        </div> 
                    </div>
                </div>
                <button className="carousel-control-prev d-flex align-items-start" style={{marginLeft :'80%'}} type="button" data-bs-target="#productRelatedSlider" data-bs-slide="prev">
                    <span className="fa-solid fa-circle-chevron-left btn btn-success" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-flex align-items-start" type="button" data-bs-target="#productRelatedSlider" data-bs-slide="next">
                    <span className="fa-solid fa-circle-chevron-right btn btn-success" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </div>
  )
}

export default RelatedProduct
