import React from 'react';
import {shallow } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
    it('Renders without crashing', () => {
        shallow(<Home />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.hasClass('top-container')).toEqual(true);
    });
});
