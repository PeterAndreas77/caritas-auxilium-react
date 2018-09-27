import React from "react";
import { shallow } from "enzyme";
import { AccountGrid } from "./AccountGrid";
import { expect } from "chai";

describe("<AccountGrid />", () => {
  const fakeUserInfo = {
    firstname: "jo",
    lastname: "jo",
    username: "jojo",
    email: "jojo@jojo.com"
  };

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
    shallow(<AccountGrid item={fakeUserInfo} dispatch={dispatch} />);
  });

  it("Renders user info flawlessly", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <AccountGrid item={fakeUserInfo} dispatch={dispatch} />
    );
    expect(wrapper.exists(".account-card")).to.equal(true);
    expect(wrapper.exists("button")).to.equal(true);
  });
});
