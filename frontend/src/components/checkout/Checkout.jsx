import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Checkout order </h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-primary text-white border">
                <tr>
                  <th>N°</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th> Price </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="product d-flex">
                    <img
                      className="img-thumbnail"
                      width="50"
                      src="https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg"
                    />
                    <p>Micro Onde</p>
                  </td>
                  <td> 5 </td>
                  <td> 250 </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="product d-flex">
                    <img
                      className="img-thumbnail"
                      width="50"
                      src="https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg"
                    />
                    <p>Micro Onde</p>
                  </td>
                  <td> 3 </td>
                  <td> 550 </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="product d-flex">
                    <img
                      className="img-thumbnail"
                      width="50"
                      src="https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg"
                    />
                    <p>Micro Onde</p>
                  </td>
                  <td> 2 </td>
                  <td> 150 </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="product d-flex">
                    <img
                      className="img-thumbnail"
                      width="50"
                      src="https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg"
                    />
                    <p>Micro Onde</p>
                  </td>
                  <td> 2 </td>
                  <td> 150 </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="">
                  <th>TOTAL </th>
                  <th></th>
                  <th></th>
                  <td> 1100 </td>
                </tr>
              </tfoot>
            </table>
            <div className="colSpan 3 pb-3 pt-2" align="right">
              <Link to="/categorie" className="btn btn-secondary me-2">
                Continue Shopping
              </Link>
              <Link className="btn btn-primary">Proceed to Payment</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
