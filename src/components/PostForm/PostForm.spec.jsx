import React from "react";
import { shallow } from "enzyme";
import PostForm from "./PostForm";

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};
describe("Test PostForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostForm {...props} />);
  });
  it("PostForm snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});