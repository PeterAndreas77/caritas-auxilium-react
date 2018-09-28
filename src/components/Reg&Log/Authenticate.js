import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default function(PassedComponents) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      return <PassedComponents {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated
  });

  return withRouter(connect(mapStateToProps)(Authenticate));
}
