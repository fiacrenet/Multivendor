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
        <Link to="/wishlist" className="list-group-item list-group-item-action">
          Wishlist
        </Link>
        <Link
          to="/customer-profil"
          className="list-group-item list-group-item-action"
        >
          Profil
        </Link>
        <Link
          to="/customer-pwd"
          className="list-group-item list-group-item-action"
        >
          Change Password
        </Link>
        <Link
          to="/customer-pwd"
          className="list-group-item list-group-item-action"
        >
          Addresses
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action text-danger"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
