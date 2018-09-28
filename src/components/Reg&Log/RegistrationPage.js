import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import { userRegister } from "../../actions/UserActions";

export class RegistrationPage extends React.Component {
  state = { toMainPage: false };

  submit = user => {
    this.props.dispatch(userRegister(user)).then(() => {
      const { authenticated } = this.props;
      if (authenticated) {
        this.setState({ toMainPage: true });
        this.props.registered();
      }
    });
  };

  render() {
    const { error } = this.props;
    if (error) {
      return <section className="login-page">Error! {error.message}</section>;
    }

    if (this.state.toMainPage === true) {
      return <Redirect to="/crisis" />;
    }

    return (
      <section className="register-page">
        <RegistrationForm onSubmit={user => this.submit(user)} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authReducer.error,
  authenticated: state.authReducer.authenticated
});

export default connect(mapStateToProps)(RegistrationPage);
