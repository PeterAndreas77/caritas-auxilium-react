import React from "react";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <h2>Fill out this form to register</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name: </label>
          <input
            name="firstname"
            value={this.state.firstname}
            onChange={e => this.change(e)}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name: </label>
          <input
            name="lastname"
            value={this.state.lastname}
            onChange={e => this.change(e)}
            placeholder="Last Name"
          />
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
        </div>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.change(e)}
            placeholder="Username"
          />
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
