import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        shallow(<Input />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper.hasClass('form-input')).toEqual(true);
    });
});
