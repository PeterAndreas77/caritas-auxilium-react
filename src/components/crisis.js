import React from "react";

const Crisis = () => {
  return (
    <section className="my-crisis">
      <div className="form-group">
        <label htmlFor="searchMyCrisis">Search My Crisis</label>
        <input type="text" id="searchMyCrisis" name="searchMyCrisis" />
        <button className="search-my-crisis">search</button>
      </div>
      <div className="my-crisis-container" />
      <div className="donation-page">
        <form className="donation-form">
          <fieldset>
            <legend>Donate your $$$</legend>
            <h4 id="crisisTitleDP">title</h4>
            <p id="crisisDateDP" />
            <p id="IDkeeper">
              Unfortunately, there are no API for charity available. So, a good
              old fashioned googling is the way to donate. When you are done, go
              back here and keep record of it.
            </p>
            <div className="form-group">
              <label htmlFor="charityName">Charity Name</label>
              <input type="text" id="charityName" name="charityName" />
            </div>
            <div className="form-group">
              <label htmlFor="donationAmount">Donation Amount</label>
              <input type="number" id="donationAmount" name="donationAmount" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmationNumber">Confirmation Number</label>
              <input
                type="text"
                id="confirmationNumber"
                name="confirmationNumber"
              />
            </div>
            <button className="submit-btn" type="submit">
              submit
            </button>
            <button className="cancel-donation-btn">cancel</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Crisis;
