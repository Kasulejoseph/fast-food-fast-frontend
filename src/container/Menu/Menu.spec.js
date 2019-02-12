import React from 'react';
import { shallow } from 'enzyme';
import { Postmenu } from './Menu';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  onChange: jest.fn(),
  onSubmit: jest.fn()
};
describe('Test Postmenu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Postmenu {...props} />);
  });
  it('Postmenu snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test handle onsubmit event', () => {
    wrapper.instance().onSubmit({ preventDefault() {} });
    expect(wrapper.state()).toEqual({
      active: "false",
      collapse: false,
      description: '',
      image: '',
      meal: '',
      price: ''
    });
  });

  it('should handle onchange function', () => {
    wrapper
      .instance()
      .onChange({ target: { name: 'email', value: 'kasule@andela.com' } });
    expect(wrapper.state('email')).toEqual('kasule@andela.com');
  });
});
