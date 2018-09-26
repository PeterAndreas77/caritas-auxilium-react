import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";

describe("<Footer />", () => {
  it("Renders without crashing", () => {
    shallow(<Footer />);
  });
});
