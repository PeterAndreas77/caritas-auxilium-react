import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Landing from "./landing";
import RegisterPage from "./RegisterPage";
import Login from "./login";
import CrisisPage from "./MainPage/CrisisPage";
import Donation from "./DonationPage/DonationPage";
import Account from "./account";
import Report from "./report";
import "../styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header isLoggedIn={true} />
        <Route path="/" exact={true} component={CrisisPage} />
        <Route path="/landing" component={Landing} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={Login} />
        <Route path="/crisis" component={CrisisPage} />
        <Route path="/donation" component={Donation} />
        <Route path="/account" component={Account} />
        <Route path="/report" component={Report} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
