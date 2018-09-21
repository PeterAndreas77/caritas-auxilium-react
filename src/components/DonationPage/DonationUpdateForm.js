import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.charity) {
    errors.charity = "Required";
  }
  if (!values.amount) {
    errors.amount = "Required";
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Must be a Number";
  }
  if (!values.confNum) {
    errors.confNum = "Required";
  }
  return errors;
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

let DonationUpdateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4>Update your $$$</h4>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Crisis Title"
      />
      <Field
        name="charity"
        type="text"
        component={renderField}
        label="Charity Name"
      />
      <Field
        name="amount"
        type="text"
        component={renderField}
        label="Donation Amount"
      />
      <Field
        name="confNum"
        type="text"
        component={renderField}
        label="Confirmation Number"
      />
      <div>
        <button type="submit" disabled={submitting}>
          submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          reset
        </button>
      </div>
    </form>
  );
};

DonationUpdateForm = reduxForm({ form: "update", validate })(
  DonationUpdateForm
);

export default DonationUpdateForm;
