import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/UserActions";

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(logout());
    this.props.logOut();
    this.props.history.replace("/");
  }

  render() {
    return null;
  }
}

export default withRouter(connect()(LogoutPage));
