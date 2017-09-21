import React from 'react';
import { shallow } from 'enzyme';

import LoggedOutNav from './LoggedOutNav';

describe('<LoggedOutNav />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchResults />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<LoggedOutNav />);
        expect(wrapper.hasClass('nav-row')).toEqual(true);
    });
});
