import React from 'react';
import { shallow } from 'enzyme';

import UsersPosts from './UsersPosts';

describe('<UsersPosts />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchResults />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<UsersPosts />);
        expect(wrapper.hasClass('users-posts')).toEqual(true);
    });
});
