import React from "react";
import { shallow } from "enzyme";
import { Feature } from "./Feature";
import { expect } from "chai";

describe("<Feature />", () => {
  it("Renders without exploding", () => {
    shallow(<Feature />);
  });
  it("Renders the features flawlessly", () => {
    const wrapper = shallow(<Feature />);
    expect(wrapper.exists(".feature-title")).to.equal(true);
    expect(wrapper.exists(".feature-img")).to.equal(true);
    expect(wrapper.exists(".feature-set")).to.equal(true);
  });
});
