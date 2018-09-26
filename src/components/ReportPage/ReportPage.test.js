import React from "react";
import { shallow } from "enzyme";
import { ReportPage } from "./ReportPage";

describe("<ReportPage />", () => {
  it("Renders without crashing", () => {
    shallow(<ReportPage />);
  });
});
