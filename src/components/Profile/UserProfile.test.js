import React from 'react';
import { shallow } from 'enzyme';

import UserProfile from './UserProfile';

describe('<UserProfile />', () => {
    it('Renders without crashing', () => {
        shallow(<UserProfile />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<UserProfile />);
        expect(wrapper.hasClass('profile-info')).toEqual(true);
    });
});
