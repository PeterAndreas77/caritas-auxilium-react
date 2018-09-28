import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { userLogin } from "../../actions/UserActions";

export class LoginPage extends React.Component {
  state = { toMainPage: false };

  submit = user => {
    this.props.dispatch(userLogin(user)).then(() => {
      const { authenticated } = this.props;
      if (authenticated) {
        this.setState({ toMainPage: true });
        this.props.logged();
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
      <section className="login-page">
        <LoginForm onSubmit={user => this.submit(user)} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authReducer.error,
  authenticated: state.authReducer.authenticated
});

export default connect(mapStateToProps)(LoginPage);
