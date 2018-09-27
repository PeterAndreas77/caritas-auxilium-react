import React from "react";
import { shallow } from "enzyme";
import { DonationGrid } from "./DonationGrid";
import { expect } from "chai";

describe("<DonationGrid />", () => {
  const fakeProps = [
    {
      title: "title1",
      created: 2017,
      confNum: "confNum1",
      charity: "charity1",
      amount: 1
    },
    {
      title: "title2",
      created: 2018,
      confNum: "confNum2",
      charity: "charity2",
      amount: 2
    }
  ];

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
    shallow(<DonationGrid items={fakeProps} dispatch={dispatch} />);
  });

  it("Renders user donation flawlessly", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <DonationGrid items={fakeProps} dispatch={dispatch} />
    );
    expect(wrapper.exists(".donation-card")).to.equal(true);
    expect(wrapper.exists("button")).to.equal(true);
  });
});
