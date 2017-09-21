import React from 'react';
import { shallow } from 'enzyme';

import DropdownLink from './DropdownLink';

describe('<DropdownLink />', () => {
    it('Renders without crashing', () => {
        shallow(<DropdownLink />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<DropdownLink />);
        expect(wrapper.hasClass('nav-links')).toEqual(true);
    });
});
