import React from "react";
import { shallow } from "enzyme";
import { DonationSearch } from "./DonationSearch";

describe("<DonationSearch />", () => {
  beforeAll(() => {
    global.localStorage = {
      loggedInUser: "jojo",
      getItem: function() {
        return "jojo";
      }
    };
  });

  it("Renders without exploding", () => {
    const dispatch = jest.fn();
    shallow(<DonationSearch searchDonation={dispatch} />);
  });

  it("Search donation by term", () => {
    const dispatch = jest.fn();
    const term = "query";
    const wrapper = shallow(<DonationSearch searchDonation={dispatch} />);
    wrapper.find("input").value = term;
    wrapper.simulate("submit", { preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
  });
});
