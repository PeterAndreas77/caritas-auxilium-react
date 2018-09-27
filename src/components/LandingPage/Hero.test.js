import React from "react";
import { shallow } from "enzyme";
import { Hero } from "./Hero";
import { expect } from "chai";

describe("<Hero />", () => {
  it("Renders without exploding", () => {
    shallow(<Hero />);
  });

  it("Renders the button links", () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.exists(".button")).to.equal(true);
    expect(wrapper.exists(".hero-img")).to.equal(true);
  });
});
