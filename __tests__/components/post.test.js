import React from 'react';
import { shallow, Enzyme } from 'enzyme';
import Posts from '../../src/components/posts';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()})
describe('Post', () => {
    let wrapper = shallow(<Posts/>);
    it('should render post', () => {
        expect(wrapper.containsMatchingElement(<div/>)).toEqual(true);
        
    });
});