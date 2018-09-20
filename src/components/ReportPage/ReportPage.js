import React from "react";
import ReportPull from "./ReportPull";
import ReportChart from "./ReportChart";

const ReportPage = () => {
  return (
    <section className="my-report">
      <ReportPull />
      <ReportChart />
    </section>
  );
};

export default ReportPage;
