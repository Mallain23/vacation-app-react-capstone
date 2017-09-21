import React from 'react';
import { shallow } from 'enzyme';

import LargePost from './LargePost';

describe('<LargePost />', () => {
    it('Renders without crashing', () => {
        shallow(<LargePost />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<LargePost />);
        expect(wrapper.hasClass('row')).toEqual(true);
    });
});
