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

let CrisisDonateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4>Donate your $$$</h4>
      <p>
        Unfortunately, there are no API for charity available. So, a good old
        fashioned googling is the way to donate. When you are done, go back here
        and keep record of it.
      </p>
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
        <button type="button" onClick={this.props.cancelClicked}>
          cancel
        </button>
      </div>
    </form>
  );
};

CrisisDonateForm = reduxForm({ form: "donate", validate })(CrisisDonateForm);

export default CrisisDonateForm;
