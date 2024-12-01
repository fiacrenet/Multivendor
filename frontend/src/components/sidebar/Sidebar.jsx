import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list-group">
        <Link
          to="/customer-dashboard"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Dashboard
        </Link>
        <Link to="/order" className="list-group-item list-group-item-action">
          Orders
        </Link>
        <a href="#" className="list-group-item list-group-item-action">
          Whishlist
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Profil
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Addresses
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action text-danger"
        >
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
