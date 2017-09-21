import React from 'react';
import { shallow } from 'enzyme';

import ManagePost from './ManagePost';

describe('<ManagePost />', () => {
    it('Renders without crashing', () => {
        shallow(<ManagePost />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<ManagePost />);
        expect(wrapper.hasClass('new-post-container')).toEqual(true);
    });
});
