import React from "react";
import { shallow } from "enzyme";
import { CrisisSearch } from "./CrisisSearch";

describe("<CrisisSearch />", () => {
  it("Renders without exploding", () => {
    const dispatch = jest.fn();
    shallow(<CrisisSearch searchRecentCrisis={dispatch} />);
  });
  it("Search recent crisis by term", () => {
    const dispatch = jest.fn();
    const term = "query";
    const wrapper = shallow(<CrisisSearch searchRecentCrisis={dispatch} />);
    wrapper.find("input").value = term;
    wrapper.simulate("submit", { preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
  });
});
