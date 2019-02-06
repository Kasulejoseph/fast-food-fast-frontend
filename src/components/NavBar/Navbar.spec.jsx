import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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