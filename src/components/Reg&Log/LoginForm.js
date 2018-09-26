import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {};
    const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
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
      username: "",
      password: "",
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
        <h3>Enter your username and password</h3>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.change(e)}
            placeholder="Username"
          />
          <p className="error-text">{this.state.usernameError}</p>
          <p>test username: 'jojo'</p>
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
          <p>test password: 'jojo123'</p>
        </div>
        <div>
          <button onClick={e => this.onSubmit(e)}>submit</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
