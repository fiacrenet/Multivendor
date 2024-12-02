import React from "react";
import Sidebar from "../sidebar/Sidebar";

export default function Profil() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col- 12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="card">
              <h4 className="card-header text-center"> Customer Profil </h4>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="firstname" className="form-label">
                      FirstName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      aria-describedby="firstname"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="lastname" className="form-label">
                      LastName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      aria-describedby="lastname"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      aria-describedby="username"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="email"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
