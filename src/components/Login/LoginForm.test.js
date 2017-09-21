import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });

    it('Renders the container initially', () => {
        const wrapper = shallow(<LoginForm/>);
        expect(wrapper.hasClass('login-form')).toEqual(true);
    });
});
