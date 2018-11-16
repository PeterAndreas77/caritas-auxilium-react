import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export class InsideNav extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutside = this.handleOutside.bind(this);
    this.state = { menuVisible: false };
  }

  handleClick() {
    if (!this.state.menuVisible) {
      document.addEventListener("click", this.handleOutside);
    } else {
      document.removeEventListener("click", this.handleOutside);
    }
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  }

  handleOutside(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <nav
        ref={node => {
          this.node = node;
        }}
        className="inside-collapsible"
      >
        <h1>
          <span className="inside-menu" onClick={this.handleClick}>
            <i className="fas fa-bars" />
          </span>
          Caritas Auxilium
        </h1>
        {this.state.menuVisible && (
          <div className="inside-menu-content">
            <ul>
              <li>
                <Link to="/crisis">
                  <i className="fas fa-hands-helping" /> Recent Crisis
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
        )}
      </nav>
    );
  }
}

export default InsideNav;
