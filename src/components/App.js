import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Landing from "./landing";
import Register from "./register";
import Login from "./login";
import "../styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
