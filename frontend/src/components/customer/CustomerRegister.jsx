import React from "react";

function CustomerRegister() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-8 offset-2">
          <div className="card">
            <h4 className="card-header text-center"> Register </h4>
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
                <div class="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="conditioncheck"
                  />
                  <label className="form-check-label" for="conditioncheck">
                    Check me out
                  </label>
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
  );
}

export default CustomerRegister;
