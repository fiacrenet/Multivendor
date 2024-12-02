import React from "react";
import Sidebar from "../sidebar/Sidebar";

export default function CustomerPwd() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col- 12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="card">
              <h4 className="card-header text-center"> Change Password </h4>
              <div className="card-body">
                <form>
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
                  <div class="mb-3">
                    <label for="password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Confirmpassword"
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
