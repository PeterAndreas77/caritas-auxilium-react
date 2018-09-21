import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const OutsideNav = () => {
  return (
    <nav className="outside-collapsible">
      <input type="checkbox" id="outside-menu" />
      <label htmlFor="outside-menu" className="menu-label">
        Menu{" "}
      </label>
      <div className="outside-menu-content">
        <ul>
          <li>
            <Link to="/landing">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link to="/register">
              <i className="fas fa-pencil-alt" /> Register
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i className="fas fa-sign-in-alt" /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default OutsideNav;
