import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { expect } from "chai";

describe("<Header />", () => {
  it("Renders without exploding", () => {
    shallow(<Header />);
  });

  it("Renders header flawlesssly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(".header")).to.equal(true);
  });
});
