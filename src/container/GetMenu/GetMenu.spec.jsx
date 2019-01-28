import React from "react";
import { shallow } from "enzyme";
import Posts from "./GetMenu";

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn()
};
describe("Test getmenu", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Posts {...props} />);
  });
  it("Getmenu snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});