import React from "react";
import "../customcss/style.css";

const AddAddressPopup = ({ setShowForm }) => {
  return (
    <div className="add-address">
      <div className="card card-address">
        <h4 className="card-header text-center"> Add Address </h4>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label for="address" className="form-label">
                Address Line 1
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="username"
              />
            </div>
            <div class="mb-3">
              <label for="addressline" className="form-label">
                Address Line 2
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
            <div class="mb-3">
              <label for="zipcode" className="form-label">
                Zip Code
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
            <div class="mb-3">
              <label for="country" className="form-label">
                Country
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary ms-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPopup;
