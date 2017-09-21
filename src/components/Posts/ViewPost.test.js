import React from 'react';
import { shallow } from 'enzyme';

import ViewPost from './ViewPost';

describe('<ViewPost />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewPost />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<ViewPost />);
        expect(wrapper.hasClass('outer-container')).toEqual(true);
    });
});
