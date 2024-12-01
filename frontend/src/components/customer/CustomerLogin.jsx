import React from "react";

function CustomerLogin() {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-6 col-8 offset-2">
          <div className="card">
            <h4 className="card-header text-center"> Login </h4>
            <div className="card-body">
              <form>
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
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
