import React from 'react'
import SingleProduct from './SingleProduct'

function CategoryProduct() {
  return (
    <div className='categoryproduct'>
        <section className="container mt-4">
            <h3 className='mb-4'><span className='text-success'>Electronics </span>Products</h3>
            <div className="row mb-4">
                <SingleProduct title='Electro Product 1'/>
                <SingleProduct title='Electro Product 2'/>
                <SingleProduct title='Electro Product 3'/>
                <SingleProduct title='Electro Product 4'/>
                <SingleProduct title='Electro Product 5'/>
                <SingleProduct title='Electro Product 6'/>
                <SingleProduct title='Electro Product 7'/>
                <SingleProduct title='Electro Product 8'/>
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

export default CategoryProduct
