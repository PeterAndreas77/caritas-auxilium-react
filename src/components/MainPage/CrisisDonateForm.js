import React from "react";
import { Field, reduxForm } from "redux-form";

let CrisisDonateForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4>Donate your $$$</h4>
      <p>
        Unfortunately, there are no API for charity available. So, a good old
        fashioned googling is the way to donate. When you are done, go back here
        and keep record of it.
      </p>
      <div className="form-group">
        <label htmlFor="charityName">Charity Name</label>
        <Field name="charityName" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="donationAmt">Donation Amount</label>
        <Field name="donationAmt" component="input" type="number" />
      </div>
      <div className="form-group">
        <label htmlFor="confNum">Confirmation Number</label>
        <Field name="confNum" component="input" type="text" />
      </div>
      <button type="submit">submit</button>
      <button>cancel</button>
    </form>
  );
};

CrisisDonateForm = reduxForm({ form: "donate" })(CrisisDonateForm);

export default CrisisDonateForm;
