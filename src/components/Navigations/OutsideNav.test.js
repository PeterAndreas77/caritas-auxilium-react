import React from "react";
import { shallow } from "enzyme";
import { OutsideNav } from "./OutsideNav";

describe("<OutsideNav />", () => {
  it("Renders without crashing", () => {
    shallow(<OutsideNav />);
  });
});
