import React from "react";

class AccountUpdateForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    firstnameError: "",
    lastnameError: "",
    emailError: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    if (this.state.firstname.length === 0) {
      isError = true;
      errors.firstnameError = "First name is required";
    } else {
      errors.firstnameError = "";
    }
    if (this.state.lastname.length === 0) {
      isError = true;
      errors.lastnameError = "Last name is required";
    } else {
      errors.lastnameError = "";
    }
    if (this.state.email.length === 0) {
      isError = true;
      errors.emailError = "Email is required";
    } else if (!emailRegex.test(this.state.email)) {
      isError = true;
      errors.emailError = "Please enter a valid email";
    } else {
      errors.emailError = "";
    }
    if (isError) {
      this.setState({ ...this.state, ...errors });
    }
    return isError;
  };

  reset = () => {
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      firstnameError: "",
      lastnameError: "",
      emailError: ""
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  render() {
    return (
      <form className="AccountUpdateForm">
        <h2>Update Your Account</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name: </label>
          <input
            name="firstname"
            value={this.state.firstname}
            onChange={e => this.change(e)}
            placeholder="First Name"
          />
          <p className="error-text">{this.state.firstnameError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name: </label>
          <input
            name="lastname"
            value={this.state.lastname}
            onChange={e => this.change(e)}
            placeholder="Last Name"
          />
          <p className="error-text">{this.state.lastnameError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={e => this.change(e)}
            placeholder="Email"
          />
          <p className="error-text">{this.state.emailError}</p>
        </div>
        <div>
          <button onClick={e => this.onSubmit(e)}>submit</button>
        </div>
      </form>
    );
  }
}

export default AccountUpdateForm;
