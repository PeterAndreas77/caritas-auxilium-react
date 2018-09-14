import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <section className="login-page">
      <form className="login-form">
        <fieldset>
          <h2>Enter your username and password</h2>
          <div className="form-group">
            <label htmlFor="loginUserName">User Name</label>
            <input type="text" id="loginUserName" name="loginUserName" />
          </div>
          <p>test username: 'jojo'</p>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" name="loginPassword" />
          </div>
          <p>test password: 'jojo123'</p>
          <button className="login-btn" type="submit">
            login
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
