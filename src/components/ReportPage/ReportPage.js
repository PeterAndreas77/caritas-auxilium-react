import React from "react";
import ReportPull from "./ReportPull";
import ReportChart from "./ReportChart";

export const ReportPage = () => {
  return (
    <section className="my-report">
      <ReportPull />
      <ReportChart />
    </section>
  );
};

export default ReportPage;
