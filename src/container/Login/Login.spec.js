import React from "react";
import { shallow } from "enzyme";
import {LogIn} from "./Login";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};
describe("Test LogIn", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogIn {...props} />);
  });
  it("LogIn snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("test handle onsubmit event", () => {      
    wrapper.instance().onSubmit({ preventDefault() {} });
    expect(wrapper.state()).toEqual({"email": "", "password": "", "role": "user"});
  });

  it("should handle onchange function", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "email", value: "kasule@andela.com" } });
    expect(wrapper.state("email")).toEqual("kasule@andela.com");
  });

});