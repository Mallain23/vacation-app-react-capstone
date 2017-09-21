import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.hasClass('row')).toEqual(true);
    });
});
