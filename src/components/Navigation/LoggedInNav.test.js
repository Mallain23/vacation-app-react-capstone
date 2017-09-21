import React from 'react';
import { shallow } from 'enzyme';

import LoggedInNav from './LoggedInNav';

describe('<LoggedInNav />', () => {
    it('Renders without crashing', () => {
        shallow(<LoggedInNav />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<LoggedInNav />);
        expect(wrapper.hasClass('nav-row')).toEqual(true);
    });
});
