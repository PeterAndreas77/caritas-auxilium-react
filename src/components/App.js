import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Landing from "./landing";
import Register from "./register";
import Login from "./login";
import Main from "./main";
import Donation from "./donation";
import Account from "./account";
import Report from "./report";
import "../styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header isLoggedIn={true} />
        <Route path="/" exact={true} component={Main} />
        <Route path="/landing" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/donation" component={Donation} />
        <Route path="/account" component={Account} />
        <Route path="/report" component={Report} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
