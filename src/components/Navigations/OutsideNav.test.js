import React from "react";
import { shallow } from "enzyme";
import { OutsideNav } from "./OutsideNav";
import { expect } from "chai";

describe("<OutsideNav />", () => {
  it("Renders without exploding", () => {
    shallow(<OutsideNav />);
  });

  it("Renders outside navigation flawlessly", () => {
    const wrapper = shallow(<OutsideNav />);
    expect(wrapper.exists("#outside-menu")).to.equal(true);
    expect(wrapper.find("li")).to.have.lengthOf(3);
  });
});
