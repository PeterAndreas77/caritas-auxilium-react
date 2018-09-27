import React from "react";
import { connect } from "react-redux";
import fetchReport from "../../actions/ReportActions";

export class ReportPull extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const year = this.state.year.trim();
    this.props.fetchReport(year);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="year">Pull Report by Year</label>
        <input
          type="number"
          name="year"
          value={this.state.year}
          onChange={e => this.change(e)}
        />
        <button>pull</button>
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
