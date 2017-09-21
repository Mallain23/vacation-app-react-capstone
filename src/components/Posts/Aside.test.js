import React from 'react';
import { shallow } from 'enzyme';

import Aside from './Aside';

describe('<Aside />', () => {
    it('Renders without crashing', () => {
        shallow(<Aside />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Aside />);
        expect(wrapper.hasClass('col-xs-12')).toEqual(true);
    });
});
