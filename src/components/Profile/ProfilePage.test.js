import React from 'react';
import { shallow } from 'enzyme';

import ProfilePage from './ProfilePage';

describe('<ProfilePage />', () => {
    it('Renders without crashing', () => {
        shallow(<ProfilePage />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<ProfilePage />);
        expect(wrapper.hasClass('user-profile')).toEqual(true);
    });
});
