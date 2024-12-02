import React from "react";
import Sidebar from "../sidebar/Sidebar";

function Wishlist() {
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
                    <th>N°</th>
                    <th> Description </th>
                    <th>Date </th>
                    <th> Actions </th>
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
                    <td> 01/12/2024 </td>
                    <td>
                      {" "}
                      <p className="btn btn-danger"> Delete</p>{" "}
                    </td>
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
                    <td> 01/12/2024 </td>
                    <td>
                      {" "}
                      <p className="btn btn-danger"> Delete</p>
                    </td>
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
                    <td> 01/12/2024 </td>
                    <td>
                      {" "}
                      <p className="btn btn-danger"> Delete</p>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="product d-flex">
                      <img
                        className="img-thumbnail"
                        width="50"
                        src="https://www.hkoenig.com/img/211/292629/4/m3/p/mini-four-electrique-25-l.jpg"
                      />
                      <p>Micro Onde</p>
                    </td>
                    <td> 01/12/2024 </td>
                    <td>
                      {" "}
                      <p className="btn btn-danger"> Delete</p>{" "}
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

export default Wishlist;
