import React from "react";
import { shallow } from "enzyme";
import PostForm from "./PostForm";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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