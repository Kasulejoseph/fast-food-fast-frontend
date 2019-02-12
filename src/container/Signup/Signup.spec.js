import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './Signup';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  registerAction: jest.fn()
};
describe('Test SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp {...props} />);
  });
  it('LogIn snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test handle onsubmit event', () => {
    wrapper.instance().onSubmit({ preventDefault() {} });
    expect(wrapper.state()).toEqual({
      active2: "de-active",
      email: '',
      location: '',
      password: '',
      role: 'user',
      username: '',
      collapse: false
    });
  });

  it('should handle onchange function', () => {
    wrapper
      .instance()
      .onChange({ target: { name: 'email', value: 'kasule@andela.com' } });
    expect(wrapper.state('email')).toEqual('kasule@andela.com');
  });
  it('test handle onclick event for nav bar auth', () => {
    wrapper.instance().onClick({ preventDefault() {} });
    expect(wrapper.state()).toEqual({
      active2: "active",
      collapse: true,
      email: '',
      location: '',
      password: '',
      role: 'user',
      username: ''
    });
  });
});
