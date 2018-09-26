import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<Header />);
  });
});
