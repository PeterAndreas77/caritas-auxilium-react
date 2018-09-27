import React from "react";
import { shallow } from "enzyme";
import { Howto } from "./Howto";
import { expect } from "chai";

describe("<Howto />", () => {
  it("Renders without exploding", () => {
    shallow(<Howto />);
  });
  it("Renders the how tos flawlessly", () => {
    const wrapper = shallow(<Howto />);
    expect(wrapper.exists(".howto-title")).to.equal(true);
    expect(wrapper.exists(".howto-img")).to.equal(true);
    expect(wrapper.exists(".howto-content")).to.equal(true);
  });
});
