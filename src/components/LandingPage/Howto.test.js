import React from "react";
import { shallow } from "enzyme";
import { Howto } from "./Howto";

describe("<Howto />", () => {
  it("Renders without crashing", () => {
    shallow(<Howto />);
  });
});
