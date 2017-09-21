import React from 'react';
import { shallow } from 'enzyme';

import UserFavorites from './UserFavorites';

describe('<UserFavorites />', () => {
    it('Renders without crashing', () => {
        shallow(<UserFavorites />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<UserFavorites/>);
        expect(wrapper.hasClass('col-xs-12')).toEqual(true);
    });
});
