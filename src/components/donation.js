import React from "react";

const Donation = () => {
  return (
    <section className="my-donation">
      <div className="form-group">
        <label htmlFor="searchMyDonation">Search my Donations</label>
        <input type="text" id="searchMyDonation" name="searchMyDonation" />
        <button className="search-donation">search</button>
      </div>
      <div className="my-donation-container" />
      <div className="donation-update-page">
        <form className="donation-update-form">
          <fieldset id="IDUpdater">
            <legend>Update your $$$</legend>
            <div className="form-group">
              <label htmlFor="charityUpdate">Charity Name</label>
              <input type="text" id="charityUpdate" name="charityUpdate" />
            </div>
            <div className="form-group">
              <label htmlFor="amountUpdate">Donation Amount</label>
              <input type="number" id="amountUpdate" name="amountUpdate" />
            </div>
            <div className="form-group">
              <label htmlFor="confNumUpdate">Confirmation Number</label>
              <input type="text" id="confNumUpdate" name="confNumUpdate" />
            </div>
            <button className="submit-btn" type="submit">
              submit
            </button>
            <button className="cancel-update-btn">cancel</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Donation;
