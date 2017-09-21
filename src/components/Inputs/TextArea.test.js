import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './TextArea';

describe('<TextArea />', () => {
    it('Renders without crashing', () => {
        shallow(<TextArea />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<TextArea />);
        expect(wrapper.hasClass('form-input')).toEqual(true);
    });
});
