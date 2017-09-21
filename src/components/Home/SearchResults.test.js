import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './SearchResults';

describe('<SearchResults />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchResults />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<SearchResults />);
        expect(wrapper.hasClass('top-container')).toEqual(true);
    });
});
