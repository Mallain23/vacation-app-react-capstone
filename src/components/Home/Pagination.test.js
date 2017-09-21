import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

describe('<Pagination />', () => {
    it('Renders without crashing', () => {
        shallow(<Pagination />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<Pagination />);
        expect(wrapper.hasClass('pagination')).toEqual(true);
    });
});
