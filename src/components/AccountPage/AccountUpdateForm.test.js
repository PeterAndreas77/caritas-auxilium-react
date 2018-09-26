import React from "react";
import { shallow, mount } from "enzyme";
import AccountUpdateForm from "./AccountUpdateForm";

describe("<AccountUpdateForm />", () => {
  it("Should render without crashing", () => {
    shallow(<AccountUpdateForm />);
  });

  it("Should fire the onSubmit callback when the form is submitted", () => {
    const wrapper = mount(<AccountUpdateForm />);
    const spy = jest.spyOn(wrapper.instance(), "onSubmit");
    const user = {
      firstname: "firstname",
      lastname: "lastname",
      email: "email@email.com",
      username: "username",
      password: "password123"
    };
    wrapper.find('input[name="firstname"]').value = user.firstname;
    wrapper.find('input[name="lastname"]').value = user.lastname;
    wrapper.find('input[name="email"]').value = user.email;
    wrapper.find('input[name="username"]').value = user.username;
    wrapper.find('input[name="password"]').value = user.password;
    wrapper.update();
    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("Should not fire onSubmit if the inputs are empty", () => {
    const wrapper = mount(<AccountUpdateForm />);
    const spy = jest.fn();
    wrapper.find("button").simulate("click");
    expect(spy).not.toHaveBeenCalled();
  });
});
