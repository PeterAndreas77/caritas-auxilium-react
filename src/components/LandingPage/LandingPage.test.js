import React from "react";
import { shallow } from "enzyme";
import { LandingPage } from "./LandingPage";

describe("<LandingPage />", () => {
  it("Renders without crashing", () => {
    shallow(<LandingPage />);
  });
});
