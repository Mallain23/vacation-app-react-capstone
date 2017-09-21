import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.hasClass('outer-app')).toEqual(true);
    });
});
