import React from "react";
import { shallow, mount } from "enzyme";
import CrisisDonateForm from "./CrisisDonateForm";

describe("<CrisisDonateForm />", () => {
  it("Should render without crashing", () => {
    shallow(<CrisisDonateForm />);
  });

  it("Should fire the onSubmit callback when the form is submitted", () => {
    const wrapper = mount(<CrisisDonateForm />);
    const spy = jest.spyOn(wrapper.instance(), "onSubmit");
    const donation = {
      title: "title",
      charity: "charity",
      amount: 10,
      confNum: "username"
    };
    wrapper.find('input[name="title"]').value = donation.title;
    wrapper.find('input[name="charity"]').value = donation.charity;
    wrapper.find('input[name="amount"]').value = donation.amount;
    wrapper.find('input[name="confNum"]').value = donation.confNum;
    wrapper.update();
    wrapper.find(".donate-btn").simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("Should not fire onSubmit if the inputs are empty", () => {
    const wrapper = mount(<CrisisDonateForm />);
    const spy = jest.fn();
    wrapper.find(".donate-btn").simulate("click");
    expect(spy).not.toHaveBeenCalled();
  });
});
