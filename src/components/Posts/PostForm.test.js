import React from 'react';
import { shallow } from 'enzyme';

import PostForm from './PostForm';

describe('<PostForm />', () => {
    it('Renders without crashing', () => {
        shallow(<PostForm />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<PostForm />);
        expect(wrapper.hasClass('manage-post-form')).toEqual(true);
    });
});
