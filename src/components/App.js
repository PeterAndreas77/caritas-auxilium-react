import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LandingPage from "./LandingPage/LandingPage";
import RegisterPage from "./RegisterPage";
import Login from "./login";
import CrisisPage from "./MainPage/CrisisPage";
import DonationPage from "./DonationPage/DonationPage";
import AccountPage from "./AccountPage/AccountPage";
import ReportPage from "./ReportPage/ReportPage";
import "../styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header isLoggedIn={false} />
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={Login} />
        <Route path="/crisis" component={CrisisPage} />
        <Route path="/donation" component={DonationPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/report" component={ReportPage} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
