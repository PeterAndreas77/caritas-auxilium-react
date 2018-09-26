import React from "react";
import { shallow } from "enzyme";
import { Feature } from "./Feature";

describe("<Feature />", () => {
  it("Renders without crashing", () => {
    shallow(<Feature />);
  });
});
