import React from "react";
import { connect } from "react-redux";
import Chart from "chart.js";
import moment from "moment";

class ReportChart extends React.Component {
  render() {
    const { item, loading, error } = this.props;
    let result = item;
    let monthArray = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0
    };
    // Loop through every month keys in the array
    for (let key in monthArray) {
      // For every index in result
      for (let i = 0; i < result.length; i++) {
        // If the index month matches the key in month array
        if (moment.monthsShort(result[i]._id.month - 1) === key) {
          // Then the value of the key is the total value in result
          monthArray[key] = result[i].total;
        }
      }
    }
    // Grab element to render the chart to
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(monthArray),
        datasets: [
          {
            label: " Amount of Donations per Month (US$)",
            data: Object.values(monthArray),
            backgroundColor: ["rgba(57, 62, 70, 0.2)"],
            borderColor: ["rgba(57, 62, 70, 1)"],
            borderWidth: 1
          }
        ]
      }
    });

    if (loading) {
      return (
        <div className="my-report-container">
          <i className="fas fa-spinner fa-spin" />
          Loading...
        </div>
      );
    }

    if (error) {
      return <div className="my-report-container">Error! {error.message}</div>;
    }

    return (
      <div className="my-report-container">
        <canvas id="myChart" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.reportReducer.item,
  loading: state.reportReducer.loading,
  error: state.reportReducer.error
});

export default connect(mapStateToProps)(ReportChart);
