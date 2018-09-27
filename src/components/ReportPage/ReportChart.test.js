import React from "react";
import { shallow } from "enzyme";
import { ReportChart } from "./ReportChart";
import { Bar } from "react-chartjs-2";
import { expect } from "chai";

describe("<ReportChart />", () => {
  const fakeProps = { item: { 1: 10 } };
  it("Renders without exploding", () => {
    shallow(<ReportChart {...fakeProps} />);
  });
  it("Renders the chart flawlessly", () => {
    const wrapper = shallow(<ReportChart {...fakeProps} />);
    expect(wrapper.exists(".my-report-container")).to.equal(true);
    expect(wrapper.find(Bar)).to.have.lengthOf(1);
  });
});
