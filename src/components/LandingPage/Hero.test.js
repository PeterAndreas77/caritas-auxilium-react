import React from "react";
import { shallow } from "enzyme";
import { Hero } from "./Hero";

describe("<Hero />", () => {
  it("Renders without crashing", () => {
    shallow(<Hero />);
  });
});
