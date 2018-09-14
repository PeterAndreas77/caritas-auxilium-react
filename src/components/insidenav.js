import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const InsideNav = () => {
  return (
    <nav className="inside-collapsible">
      <input type="checkbox" id="inside-menu" />
      <label htmlFor="inside-menu" className="menu-label">
        Menu{" "}
      </label>
      <div className="inside-menu-content">
        <ul>
          <li>
            <Link to="/main">
              <i className="fas fa-hands-helping" /> Recent Crisis
            </Link>
          </li>
          <li>
            <Link to="/crisis">
              <i className="fas fa-donate" /> My Crisis
            </Link>
          </li>
          <li>
            <Link to="/donation">
              <i className="fas fa-file-invoice-dollar" /> My Donations
            </Link>
          </li>
          <li>
            <Link to="/account">
              <i className="fas fa-cogs" /> My Account
            </Link>
          </li>
          <li>
            <Link to="/report">
              <i className="fas fa-chart-bar" /> My Reports
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <i className="fas fa-sign-out-alt" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InsideNav;
