import React from "react";

class CrisisDonateForm extends React.Component {
  state = {
    title: "",
    charity: "",
    amount: "",
    confNum: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      title: "",
      charity: "",
      amount: "",
      confNum: ""
    });
  };

  render() {
    return (
      <form>
        <h4>Donate your $$$</h4>
        <p>
          Unfortunately, there are no API for charity available. So, a good old
          fashioned googling is the way to donate. When you are done, go back
          here and keep record of it.
        </p>
        <div className="form-group">
          <label htmlFor="title">Crisis Title: </label>
          <input
            name="title"
            value={this.state.title}
            onChange={e => this.change(e)}
            placeholder="Crisis Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="charity">Charity Name: </label>
          <input
            name="charity"
            value={this.state.charity}
            onChange={e => this.change(e)}
            placeholder="charity Name"
          />
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
        </div>
        <div className="form-group">
          <label htmlFor="confNum">Confirmation Number: </label>
          <input
            name="confNum"
            value={this.state.confNum}
            onChange={e => this.change(e)}
            placeholder="Confirmation Number"
          />
        </div>
        <div>
          <button onClick={e => this.onSubmit(e)}>submit</button>
          <button onClick={this.props.cancelClicked}>cancel</button>
        </div>
      </form>
    );
  }
}

export default CrisisDonateForm;
