import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export class OutsideNav extends React.Component {
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
        className="outside-collapsible"
      >
        <h1>
          <span className="outside-menu" onClick={this.handleClick}>
            <i className="fas fa-bars" />
          </span>
          Caritas Auxilium
        </h1>
        {this.state.menuVisible && (
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
        )}
      </nav>
    );
  }
}

export default OutsideNav;
