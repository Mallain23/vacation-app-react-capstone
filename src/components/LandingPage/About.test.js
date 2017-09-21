import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.hasClass('about-top')).toEqual(true);
    });
});
