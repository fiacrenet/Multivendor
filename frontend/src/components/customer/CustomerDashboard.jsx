import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body bg-success text-white text-center">
                  <h4>Total Orders</h4>
                  <h4>
                    <p> 123 </p>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body bg-warning text-white text-center">
                  <h4>Total Spend</h4>
                  <h4>
                    <p> 123 </p>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body bg-danger text-white text-center">
                  <h4>Total Whishlist</h4>
                  <h4>
                    <p> 123 </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
