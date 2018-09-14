import React from "react";

const Report = () => {
  return (
    <section className="my-report">
      <div className="form-group">
        <label htmlFor="reportYear">Pull Report by Year</label>
        <input type="number" min="2000" id="reportYear" name="reportYear" />
        <button className="pull-report-btn">pull</button>
      </div>
      <div className="my-report-container">
        <canvas id="myChart" />
      </div>
    </section>
  );
};

export default Report;
