import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Navigations/Header";
import Footer from "./Navigations/Footer";
import LandingPage from "./LandingPage/LandingPage";
import RegistrationPage from "./Reg&Log/RegistrationPage";
import LoginPage from "./Reg&Log/LoginPage";
import CrisisPage from "./MainPage/CrisisPage";
import DonationPage from "./DonationPage/DonationPage";
import AccountPage from "./AccountPage/AccountPage";
import ReportPage from "./ReportPage/ReportPage";
import "../styles/app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.loggedIn = this.loggedIn.bind(this);
  }

  loggedIn() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/landing" component={LandingPage} />
          <Route
            path="/register"
            render={props => (
              <RegistrationPage {...props} registered={this.loggedIn} />
            )}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/crisis" component={CrisisPage} />
          <Route path="/donation" component={DonationPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/report" component={ReportPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
