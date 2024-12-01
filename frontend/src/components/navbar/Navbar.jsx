import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Market Place
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Brand
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="categorie">
                Category
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="customer-register" className="dropdown-item">
                    {" "}
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="customer-login" className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="checkout">
                My Cart ( 4 )
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control ms-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
