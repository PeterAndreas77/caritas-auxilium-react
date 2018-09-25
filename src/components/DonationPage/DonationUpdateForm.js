import React from "react";

class DonationUpdateForm extends React.Component {
  state = {
    title: "",
    charity: "",
    amount: "",
    confNum: "",
    titleError: "",
    charityError: "",
    amountError: "",
    confNumError: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {};
    if (this.state.title.length === 0) {
      isError = true;
      errors.titleError = "Crisis title is required";
    } else {
      errors.titleError = "";
    }
    if (this.state.charity.length === 0) {
      isError = true;
      errors.charityError = "Charity name is required";
    } else {
      errors.charityError = "";
    }
    if (this.state.amount.length === 0) {
      isError = true;
      errors.amountError = "Donation amount is required";
    } else if (this.state.amount <= 0) {
      isError = true;
      errors.amountError = "Donation amount cannot be negative";
    } else {
      errors.amountError = "";
    }
    if (this.state.confNum.length === 0) {
      isError = true;
      errors.confNumError = "Confirmation number is required";
    } else {
      errors.confNumError = "";
    }
    if (isError) {
      this.setState({ ...this.state, ...errors });
    }
    return isError;
  };

  reset = () => {
    this.setState({
      title: "",
      charity: "",
      amount: "",
      confNum: "",
      titleError: "",
      charityError: "",
      amountError: "",
      confNumError: ""
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  render() {
    return (
      <form>
        <h4>Update your $$$</h4>
        <div className="form-group">
          <label htmlFor="title">Crisis Title: </label>
          <input
            name="title"
            value={this.state.title}
            onChange={e => this.change(e)}
            placeholder="Crisis Title"
          />
          <p className="error-text">{this.state.titleError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="charity">Charity Name: </label>
          <input
            name="charity"
            value={this.state.charity}
            onChange={e => this.change(e)}
            placeholder="charity Name"
          />
          <p className="error-text">{this.state.charityError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount: </label>
          <input
            name="amount"
            type="number"
            value={this.state.amount}
            onChange={e => this.change(e)}
            placeholder="Donation Amount"
          />
          <p className="error-text">{this.state.amountError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="confNum">Confirmation Number: </label>
          <input
            name="confNum"
            value={this.state.confNum}
            onChange={e => this.change(e)}
            placeholder="Confirmation Number"
          />
          <p className="error-text">{this.state.confNumError}</p>
        </div>
        <div>
          <button onClick={e => this.onSubmit(e)}>submit</button>
          <button onClick={this.props.cancelClicked}>cancel</button>
        </div>
      </form>
    );
  }
}

export default DonationUpdateForm;
