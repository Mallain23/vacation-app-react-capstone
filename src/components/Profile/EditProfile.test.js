import React from 'react';
import { shallow } from 'enzyme';

import EditProfile from './EditProfile';

describe('<EditProfile />', () => {
    it('Renders without crashing', () => {
        shallow(<EditProfile />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.hasClass('edit-profile')).toEqual(true);
    });
});
