import React from "react";
import { shallow } from "enzyme";
import { RegistrationPage } from "./RegistrationPage";

describe("<RegistrationPage />", () => {
  it("Renders without crashing", () => {
    shallow(<RegistrationPage />);
  });
});
