import React from 'react';
import { shallow } from 'enzyme';

import AppFeatures from './AppFeatures';

describe('<AppFeatures />', () => {
    it('Renders without crashing', () => {
        shallow(<AppFeatures />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<AppFeatures/>);
        expect(wrapper.hasClass('app-features')).toEqual(true);
    });
});
