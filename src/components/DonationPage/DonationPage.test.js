import React from "react";
import { shallow } from "enzyme";
import { DonationPage } from "./DonationPage";

describe("<DonationPage />", () => {
  it("Renders without exploding", () => {
    shallow(<DonationPage />);
  });
});
