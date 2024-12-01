import React from "react";
import Sidebar from "../sidebar/Sidebar";

function Order() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-primary text-white border">
                  <tr>
                    <th>N° Order</th>
                    <th> Description </th>
                    <th>Date </th>
                    <th> Total</th>
                    <th> Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="product d-flex">
                      <p>Micro Onde</p>
                    </td>
                    <td> 01/12/2024 </td>
                    <td> 850 </td>
                    <td>
                      <span className="text-secondary">
                        <i className="fa fa-spin fa-spinner"></i> Processing
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className="product d-flex">
                      <p>Micro Onde</p>
                    </td>
                    <td> 01/12/2024 </td>
                    <td> 850 </td>
                    <td>
                      <span className="text-success">
                        <i class="fa-solid fa-circle-check"></i> Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className="product d-flex">
                      <p>Micro Onde</p>
                    </td>
                    <td> 01/12/2024 </td>
                    <td> 850 </td>
                    <td>
                      <span className="text-success">
                        <i class="fa-solid fa-circle-check"></i> Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className="product d-flex">
                      <p>Micro Onde</p>
                    </td>
                    <td> 01/12/2024 </td>
                    <td> 850 </td>
                    <td>
                      <span className="text-danger">
                        <i class="fa-solid fa-circle-xmark"></i> Cancelled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
