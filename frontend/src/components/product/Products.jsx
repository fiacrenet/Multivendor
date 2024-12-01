import React from 'react'
import SingleProduct from './SingleProduct'

function Products() {
  return (
    <div className='products'>
        <section className="container mt-4">
            <h3 className='mb-4'> All Products</h3>
            <div className="row mb-4">
                <SingleProduct title='Product 1'/>
                <SingleProduct title='Product 2'/>
                <SingleProduct title='Product 3'/>
                <SingleProduct title='Product 4'/>
                <SingleProduct title='Product 5'/>
                <SingleProduct title='Product 6'/>
                <SingleProduct title='Product 7'/>
                <SingleProduct title='Product 8'/>
            </div>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </nav>
        </section>
      
    </div>
  )
}

export default Products
