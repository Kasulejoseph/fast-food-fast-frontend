import React from 'react';
import { shallow, configure } from 'enzyme';
import Posts from '../../src/components/posts';
import Adapter from 'enzyme-adapter-react-16';
import sum from '../components/number'

describe('Post', () => {
    let wrapper = shallow(<Posts/>);
    it('should render post', () => {
        expect(wrapper.containsMatchingElement(<div/>)).toEqual(false);
        
    });
});
