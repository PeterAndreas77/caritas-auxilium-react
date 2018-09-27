import React from "react";
import { shallow } from "enzyme";
import { CrisisPage } from "./CrisisPage";

describe("<CrisisPage />", () => {
  it("Renders without exploding", () => {
    shallow(<CrisisPage />);
  });
});
