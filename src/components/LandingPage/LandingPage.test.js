import React from 'react';
import { shallow } from 'enzyme';

import LangingPage from './LandingPage';

describe('<LangingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('outer-container')).toEqual(true);
    });
});
