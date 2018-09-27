import React from "react";
import { shallow } from "enzyme";
import { CrisisGrid } from "./CrisisGrid";
import { expect } from "chai";

describe("<CrisisGrid />", () => {
  const fakeProps = [
    { fields: { title: "title1" } },
    { fields: { title: "title2" } }
  ];

  it("Renders without exploding", () => {
    const dispatch = jest.fn();
    shallow(<CrisisGrid items={fakeProps} dispatch={dispatch} />);
  });

  it("Renders recent crisis flawlessly", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <CrisisGrid items={fakeProps} dispatch={dispatch} />
    );
    expect(wrapper.exists(".crisis-card")).to.equal(true);
    expect(wrapper.exists("button")).to.equal(true);
  });
});
