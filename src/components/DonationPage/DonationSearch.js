import React from "react";
import { connect } from "react-redux";
import { searchDonation } from "../../actions/DonationActions";

class DonationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const term = this.textInput.value.trim();
    this.props.searchDonation(term);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-group">
        <input type="text" ref={input => (this.textInput = input)} />
        <button type="submit" onClick={this.props.searchClicked}>
          search
        </button>
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