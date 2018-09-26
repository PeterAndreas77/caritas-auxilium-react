import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "./LoginPage";

describe("<LoginPage />", () => {
  it("Renders without crashing", () => {
    shallow(<LoginPage />);
  });
});
