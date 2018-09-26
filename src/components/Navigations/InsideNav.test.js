import React from "react";
import { shallow } from "enzyme";
import { InsideNav } from "./InsideNav";

describe("<InsideNav />", () => {
  it("Renders without crashing", () => {
    shallow(<InsideNav />);
  });
});
