import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
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

let LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your username and password</h2>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <p>test username: 'jojo'</p>
      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
      />
      <p>test password: 'jojo123'</p>
      <div>
        <button type="submit" disabled={submitting}>
          login
        </button>
        <Link to="/landing">
          <button type="button">cancel</button>
        </Link>
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: "register", validate })(LoginForm);

export default LoginForm;
