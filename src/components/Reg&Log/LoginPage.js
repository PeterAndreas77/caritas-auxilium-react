import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { userLogin } from "../../actions/UserActions";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { toMainPage: false };
  }

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
        <LoginForm onSubmit={this.submit} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.loginReducer.error,
  authenticated: state.loginReducer.authenticated
});

export default connect(mapStateToProps)(LoginPage);
