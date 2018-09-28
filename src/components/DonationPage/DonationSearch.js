import React from "react";
import { connect } from "react-redux";
import { searchDonation } from "../../actions/DonationActions";

export class DonationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const term = this.state.term.trim();
    this.props.searchDonation(term);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="term">Search your donation</label>
        <input
          type="text"
          name="term"
          value={this.state.year}
          onChange={e => this.change(e)}
        />
        <button onClick={this.props.searchClicked}>search</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { searchDonation: term => dispatch(searchDonation(term)) };
};

export default connect(
  null,
  mapDispatchToProps
)(DonationSearch);
