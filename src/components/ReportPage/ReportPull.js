import React from "react";
import { connect } from "react-redux";
import fetchReport from "../../actions/ReportActions";

class ReportPull extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const year = this.textInput.value.trim();
    this.props.fetchReport(year);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-group">
        <label htmlFor="reportYear">Pull Report by Year</label>
        <input type="number" name="reportYear" />
        <button type="submit">pull</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchReport: year => dispatch(fetchReport(year)) };
};

export default connect(
  null,
  mapDispatchToProps
)(ReportPull);
