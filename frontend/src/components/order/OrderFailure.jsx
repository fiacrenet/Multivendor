import React from "react";
import { Link } from "react-router-dom";

function OrderFailure() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8  offset-2">
          <div className="card">
            <div className="card-body text-center">
              <span className="text-danger">
                <i class="fa-solid fa-circle-xmark fa-3x"></i>
              </span>
              <h3 className="text-danger mt-2">
                Something is wrong with you order
              </h3>
              <p className="mt-4">
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

export default OrderFailure;
