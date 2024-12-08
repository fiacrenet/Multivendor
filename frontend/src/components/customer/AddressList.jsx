import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import AddAddressPopup from "./AddAddressPopup";

function AddressList() {
  const [showFrom, setShowForm] = useState(false);

  return (
    <>
      {showFrom ? <AddAddressPopup /> : <></>}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 col-12 mb-2">
            <Sidebar />
          </div>
          <div className="col-md-9 col-12 mb-2">
            <div className="row">
              <div className="col-12">
                <span
                  onClick={() => setShowForm(true)}
                  className="btn btn-outline-success mb-4 float-start"
                >
                  <i className="fa fa-plus-circle"></i> Add Address
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <p>
                      <i className="fa fa-check-circle text-success"></i>
                    </p>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body text-mute">
                    <span className="badge bg-dark text-white m-2">
                      Mark Default
                    </span>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body text-mute">
                    <span className="badge bg-dark text-white m-2">
                      Mark Default
                    </span>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <span className="badge bg-dark text-white m-2">
                      Mark Default
                    </span>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <span className="badge bg-dark text-white m-2">
                      Mark Default
                    </span>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <span className="badge bg-dark text-white m-2">
                      Mark Default
                    </span>
                    <p> 2 rue de la sentinelle, Paris 75001 , France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressList;
