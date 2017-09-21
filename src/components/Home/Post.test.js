import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';

describe('<Post />', () => {
    it('Renders without crashing', () => {
        shallow(<Post />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Post />);
        expect(wrapper.hasClass('box')).toEqual(true);
    });
});
