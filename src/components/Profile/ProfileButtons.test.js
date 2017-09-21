import React from 'react';
import { shallow } from 'enzyme';

import ProfileButtons from './ProfileButtons';

describe('<ProfileButtons />', () => {
    it('Renders without crashing', () => {
        shallow(<ProfileButtons />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<ProfileButtons/>);
        expect(wrapper.hasClass('prof-btn-container')).toEqual(true);
    });
});
