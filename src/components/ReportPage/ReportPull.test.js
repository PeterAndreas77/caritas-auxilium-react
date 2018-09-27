import React from "react";
import { shallow } from "enzyme";
import { ReportPull } from "./ReportPull";

describe("<ReportPull />", () => {
  it("Renders without exploding", () => {
    const dispatch = jest.fn();
    shallow(<ReportPull fetchReport={dispatch} />);
  });
  it("Fetches store year", () => {
    const dispatch = jest.fn();
    const year = 2018;
    const wrapper = shallow(<ReportPull fetchReport={dispatch} />);
    wrapper.find("input").value = year;
    wrapper.simulate("submit", { preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
  });
});
