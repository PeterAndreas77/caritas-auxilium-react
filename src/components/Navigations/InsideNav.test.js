import React from "react";
import { shallow } from "enzyme";
import { InsideNav } from "./InsideNav";
import { expect } from "chai";

describe("<InsideNav />", () => {
  it("Renders without exploding", () => {
    shallow(<InsideNav />);
  });
  it("Renders inside navigation flawlessly", () => {
    const wrapper = shallow(<InsideNav />);
    expect(wrapper.exists("#inside-menu")).to.equal(true);
    expect(wrapper.find("li")).to.have.lengthOf(5);
  });
});
