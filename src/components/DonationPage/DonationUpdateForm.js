import React from "react";
import { Field, reduxForm } from "redux-form";

let DonationUpdateForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4>Update your $$$</h4>
      <div className="form-group">
        <label htmlFor="updateTitle">Crisis Title</label>
        <Field name="updateTitle" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="updateName">Charity Name</label>
        <Field name="updateName" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="updateAmt">Donation Amount</label>
        <Field name="updateAmt" component="input" type="number" />
      </div>
      <div className="form-group">
        <label htmlFor="updateNum">Confirmation Number</label>
        <Field name="updateNum" component="input" type="text" />
      </div>
      <button type="submit">submit</button>
      <button>cancel</button>
    </form>
  );
};

DonationUpdateForm = reduxForm({ form: "update" })(DonationUpdateForm);

export default DonationUpdateForm;
