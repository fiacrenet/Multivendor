import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <span className="text-success">
                <i class="fa-solid fa-circle-check fa-3x"></i>
              </span>
              <h3 className="text-success">Thanks for your Order</h3>
              <p className="mt-2">
                <Link to="/" className="btn btn-primary">
                  {" "}
                  Back to Home{" "}
                </Link>{" "}
                <Link to="/customer-dashboard" className="btn btn-primary ms-2">
                  {" "}
                  Go to Dashboard{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
