import React from "react";

const AccountUpdateForm = () => {
  return (
    <div className="account-update-page">
      <form className="account-update-form">
        <fieldset>
          <legend>Customize Your Account</legend>
          <div className="form-group">
            <label htmlFor="updateFirstName">First Name</label>
            <input type="text" id="updateFirstName" name="updateFirstName" />
          </div>
          <div className="form-group">
            <label htmlFor="updateLastName">Last Name</label>
            <input type="text" id="updateLastName" name="updateLastName" />
          </div>
          <div className="form-group">
            <label htmlFor="updateEmail">Email</label>
            <input type="email" id="updateEmail" name="updateEmail" />
          </div>
          <button className="submit-btn" type="submit">
            submit
          </button>
          <button className="cancel-account-update">cancel</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AccountUpdateForm;
