import React from "react";
import { shallow, mount } from "enzyme";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("Renders without exploding", () => {
    shallow(<LoginForm />);
  });

  it("Should fire the onSubmit callback when the form is submitted", () => {
    const wrapper = mount(<LoginForm />);
    const spy = jest.spyOn(wrapper.instance(), "onSubmit");
    const user = {
      username: "username",
      password: "password123"
    };
    wrapper.find('input[name="username"]').value = user.username;
    wrapper.find('input[name="password"]').value = user.password;
    wrapper.update();
    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("Should not fire onSubmit if the inputs are empty", () => {
    const wrapper = mount(<LoginForm />);
    const spy = jest.fn();
    wrapper.find("button").simulate("click");
    expect(spy).not.toHaveBeenCalled();
  });
});
