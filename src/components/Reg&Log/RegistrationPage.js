import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import { userRegister } from "../../actions/UserActions";

class RegistrationPage extends React.Component {
  constructor() {
    super();
    this.state = { toMainPage: false };
  }

  submit = user => {
    this.props.dispatch(userRegister(user)).then(() => {
      this.setState({ toMainPage: true });
      this.props.registered();
    });
  };

  render() {
    if (this.state.toMainPage === true) {
      return <Redirect to="/crisis" />;
    }

    return (
      <section className="register-page">
        <RegistrationForm onSubmit={this.submit} />
      </section>
    );
  }
}

export default connect()(RegistrationPage);
