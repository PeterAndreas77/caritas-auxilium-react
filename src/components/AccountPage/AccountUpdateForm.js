import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />{" "}
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

let AccountUpdateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Your Account</h2>
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
      <div>
        <button type="submit" disabled={submitting}>
          update
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          reset
        </button>
      </div>
    </form>
  );
};

AccountUpdateForm = reduxForm({ form: "AccUpd", validate })(AccountUpdateForm);

export default AccountUpdateForm;
