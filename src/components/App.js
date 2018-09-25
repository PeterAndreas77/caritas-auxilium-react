import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Navigations/Header";
import Footer from "./Navigations/Footer";
import LandingPage from "./LandingPage/LandingPage";
import RegistrationPage from "./Reg&Log/RegistrationPage";
import LoginPage from "./Reg&Log/LoginPage";
import CrisisPage from "./MainPage/CrisisPage";
import DonationPage from "./DonationPage/DonationPage";
import AccountPage from "./AccountPage/AccountPage";
import ReportPage from "./ReportPage/ReportPage";
import NotFound from "./NotFound";
import Authenticate from "./Reg&Log/Authenticate";
import LogoutPage from "./Reg&Log/LogoutPage";
import "../styles/animation.css";
import "../styles/background.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/container.css";
import "../styles/form.css";
import "../styles/pages.css";
import "../styles/mediaQ.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
  }

  loggedIn() {
    this.setState({ isLoggedIn: true });
  }

  loggedOut() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route path="/" exact={true} component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
            <Route
              path="/register"
              render={props => (
                <RegistrationPage {...props} registered={this.loggedIn} />
              )}
            />
            <Route
              path="/login"
              render={props => <LoginPage {...props} logged={this.loggedIn} />}
            />
            <Route path="/crisis" component={Authenticate(CrisisPage)} />
            <Route path="/donation" component={Authenticate(DonationPage)} />
            <Route path="/account" component={Authenticate(AccountPage)} />
            <Route path="/report" component={Authenticate(ReportPage)} />
            <Route
              path="/logout"
              render={props => (
                <LogoutPage {...props} logOut={this.loggedOut} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
