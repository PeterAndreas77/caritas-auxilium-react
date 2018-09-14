import React from "react";
import OutsideNav from "./outsidenav";
import InsideNav from "./insidenav";
import "../styles/header.css";

const Header = props => {
  return props.isLoggedIn === true ? (
    <header className="header" role="banner">
      <InsideNav />
    </header>
  ) : (
    <header className="header" role="banner">
      <OutsideNav />
    </header>
  );
};
export default Header;
