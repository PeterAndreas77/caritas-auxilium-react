import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";
import { expect } from "chai";

describe("<Footer />", () => {
  it("Renders without exploding", () => {
    shallow(<Footer />);
  });
  it("Render the footer flawlessly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists(".footer")).to.equal(true);
  });
});
