import React from "react";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    usernameError: "",
    passwordError: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
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
    if (this.state.username.length === 0) {
      isError = true;
      errors.usernameError = "Username is required";
    } else {
      errors.usernameError = "";
    }
    if (this.state.password.length === 0) {
      isError = true;
      errors.passwordError = "Password is required";
    } else if (!passwordRegex.test(this.state.password)) {
      isError = true;
      errors.passwordError = "Password must be at least 6 characters";
    } else {
      errors.passwordError = "";
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
      username: "",
      password: "",
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      usernameError: "",
      passwordError: ""
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
      <form>
        <h3>Fill out this form to register</h3>
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
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.change(e)}
            placeholder="Username"
          />
          <p className="error-text">{this.state.usernameError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.change(e)}
            placeholder="Password"
          />
          <p className="error-text">{this.state.passwordError}</p>
          <p>
            Password must contain at least one letter, one number, and be longer
            than 6 characters
          </p>
        </div>
        <div>
          <button onClick={e => this.onSubmit(e)}>submit</button>
          <Link to="/landing">
            <button>cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
