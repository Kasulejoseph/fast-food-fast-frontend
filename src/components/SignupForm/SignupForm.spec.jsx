import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./SignupForm";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn()
};
describe("Test SignupForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignupForm {...props} />);
  });
  it("SignupForm snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});