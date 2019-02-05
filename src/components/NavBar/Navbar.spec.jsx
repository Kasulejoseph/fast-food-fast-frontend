import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};
describe("Test Navbar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });
  it("Navbar snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});