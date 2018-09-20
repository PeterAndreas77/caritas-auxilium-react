import React from "react";
import { Field, reduxForm } from "redux-form";

let DonationUpdateForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4>Update your $$$</h4>
      <div className="form-group">
        <label htmlFor="title">Crisis Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="charity">Charity Name</label>
        <Field name="charity" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Donation Amount</label>
        <Field name="amount" component="input" type="number" />
      </div>
      <div className="form-group">
        <label htmlFor="confNum">Confirmation Number</label>
        <Field name="confNum" component="input" type="text" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

DonationUpdateForm = reduxForm({ form: "update" })(DonationUpdateForm);

export default DonationUpdateForm;
