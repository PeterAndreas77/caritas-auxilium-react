import React from "react";
import { shallow } from "enzyme";
import { CrisisSingle } from "./CrisisSingle";
import { expect } from "chai";

describe("<CrisisSingle />", () => {
  const fakeProps = {
    fields: { title: "title", date: 2018, body: "body" }
  };
  it("Renders without exploding", () => {
    const dispatch = jest.fn();
    shallow(<CrisisSingle item={fakeProps} dispatch={dispatch} />);
  });
  it("Renders a single crisis flawlessly", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <CrisisSingle item={fakeProps} dispatch={dispatch} />
    );
    expect(wrapper.exists(".single-crisis")).to.equal(true);
    expect(wrapper.exists(".crisis-title")).to.equal(true);
    expect(wrapper.exists(".crisis-date")).to.equal(true);
    expect(wrapper.exists(".crisis-body")).to.equal(true);
    expect(wrapper.exists("button")).to.equal(true);
  });
});
