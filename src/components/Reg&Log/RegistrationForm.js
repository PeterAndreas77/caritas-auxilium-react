import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

let RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill out this form to register</h2>
      <Field
        name="firstname"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>
          register
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          reset
        </button>
        <Link to="/landing">
          <button type="button">cancel</button>
        </Link>
      </div>
    </form>
  );
};

RegistrationForm = reduxForm({ form: "register", validate })(RegistrationForm);

export default RegistrationForm;
