import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import NavBarAuth from './NavBarAuth'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  onClick: jest.fn()
};
describe('Test Postmenu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar {...props} />);
  });
  it('navbar auth navbar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test handle onclick event', () => {
    wrapper.instance().onClick({ preventDefault() {} });
    expect(wrapper.state()).toEqual({"collapse": true});
  });

  describe('Test navbar auth', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<NavBarAuth {...props} />);
    });
    it('navbar auth snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('test handle onclick event for nav bar auth', () => {
      wrapper.instance().onClick({ preventDefault() {} });
      expect(wrapper.state()).toEqual({"collapse": true});
    });
  });
});
