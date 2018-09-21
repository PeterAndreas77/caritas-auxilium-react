import React from "react";
import { Field, reduxForm } from "redux-form";

let RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill out this form to register</h2>
      <div className="form-group">
        <label htmlFor="firstname">First Name: </label>
        <Field name="firstname" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last Name: </label>
        <Field name="lastname" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="username">User Name: </label>
        <Field name="username" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">register</button>
    </form>
  );
};

RegistrationForm = reduxForm({ form: "register" })(RegistrationForm);

export default RegistrationForm;
