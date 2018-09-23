import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
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
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <h2>Enter your username and password</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.change(e)}
            placeholder="Username"
          />
        </div>
        <p>test username: 'jojo'</p>
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
        <p>test password: 'jojo123'</p>
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

export default LoginForm;
