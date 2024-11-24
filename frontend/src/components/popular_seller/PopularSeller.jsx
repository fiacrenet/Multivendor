import React from 'react'

function PopularSeller() {
  return (
    <div className="popularseller mt-4">
        <div className="container">
            <h3 className='mb-4'>Popular Sellers <a href='#' className='float-end btn  btn-dark mt-2'>View All sellers <i class="fa-solid fa-arrow-right"></i></a></h3>
            <div className="row">
                {/* Popular sellers Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='data:image/jpeg;base64,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' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Seller name</h4>
                        </div>
                        <div className="card-footer">
                            <p> Product sell: 2553 </p>
                        </div>
                    </div>
                </div>
                {/* Popular sellers Box End */}
                 {/* Popular sellers Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='https://media.istockphoto.com/id/1388648617/fr/photo/jeune-homme-de-race-blanche-confiant-en-v%C3%AAtements-d%C3%A9contract%C3%A9s-en-jean-avec-les-bras-crois%C3%A9s.jpg?s=612x612&w=0&k=20&c=SoDIZ0KCisDUH2nxDBUhrvDQI6RUFaSlJv8CKDKUXHA=' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Seller name</h4>
                        </div>
                        <div className="card-footer">
                            <p> Product sell: 2553 </p>
                        </div>
                    </div>
                </div>
                {/* Popular sellers Box End */}
                 {/* Popular sellers Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='data:image/jpeg;base64,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' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Seller name</h4>
                        </div>
                        <div className="card-footer">
                            <p> Product sell: 2553 </p>
                        </div>
                    </div>
                </div>
                {/* Popular sellers Box End */}
                 {/* Popular sellers Box */}
                 <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src='data:image/jpeg;base64,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' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center">Seller name</h4>
                        </div>
                        <div className="card-footer">
                            <p> Product sell: 2553 </p>
                        </div>
                    </div>
                </div>
                {/* Popular sellers Box End */}
            </div>
        </div>
    </div>  
  )
}

export default PopularSeller