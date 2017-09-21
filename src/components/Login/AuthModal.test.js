import React from 'react';
import { shallow } from 'enzyme';

import AuthModal from './AuthModal';

describe('<AuthModal />', () => {
    it('Renders without crashing', () => {
        shallow(<AuthModal />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<AuthModal/>);
        expect(wrapper.hasClass('authentication-modal')).toEqual(true);
    });
});
