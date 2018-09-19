import React from "react";

import "../styles/register.css";

class RegisterPage extends React.Component {
  render() {
    return (
      <section className="register-page">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <h2>Fill out this form to register</h2>
            <div className="form-group">
              <label htmlFor="registerFirstName">First Name</label>
              <input
                type="text"
                id="registerFirstName"
                name="registerFirstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerLastName">Last Name</label>
              <input
                type="text"
                id="registerLastName"
                name="registerLastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerUserName">User Name</label>
              <input
                type="text"
                id="registerUserName"
                name="registerUserName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerEmail">Email</label>
              <input type="email" id="registerEmail" name="registerEmail" />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                id="registerPassword"
                name="registerPassword"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <button className="register-btn" type="submit">
              register
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default RegisterPage;
