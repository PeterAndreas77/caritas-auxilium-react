import React from "react";
import { connect } from "react-redux";
import { searchRecentCrisis } from "../actions/CrisisActions";

class CrisisSearch extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const term = this.textInput.value.trim();
    console.log(term);
    this.props.searchRecentCrisis(term);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-group">
        <input type="text" ref={input => (this.textInput = input)} />
        <button type="submit">search</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { searchRecentCrisis: term => dispatch(searchRecentCrisis(term)) };
};

export default connect(
  null,
  mapDispatchToProps
)(CrisisSearch);
