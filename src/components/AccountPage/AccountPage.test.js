import React from "react";
import { shallow } from "enzyme";
import { AccountPage } from "./AccountPage";

describe("<AccountPage />", () => {
  it("Renders without crashing", () => {
    shallow(<AccountPage />);
  });
});
