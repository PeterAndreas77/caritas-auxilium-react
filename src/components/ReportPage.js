import React from "react";
import { connect } from "react-redux";
import fetchReport from "../../actions/ReportActions";

class ReportPage extends React.Component {
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
    const { item, loading, error } = this.props;

    return (
      <section className="my-report">
        <form onSubmit={this.onSubmit} className="form-group">
          <label htmlFor="reportYear">Pull Report by Year</label>
          <input type="number" name="reportYear" />
          <button type="submit">pull</button>
        </form>
        <div className="my-report-container">
          <canvas id="myChart" />
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  item: state.reportReducer.item,
  loading: state.reportReducer.loading,
  error: state.reportReducer.error
});

const mapDispatchToProps = dispatch => {
  return { fetchReport: year => dispatch(fetchReport(year)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportPage);
