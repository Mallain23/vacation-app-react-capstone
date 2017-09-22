import React from 'react';
import {connect} from 'react-redux';

import { getCurrentUserProfile } from '../actions/ajaxCallsToUserRoute';
import { login } from '../actions/auth';
import { DEMO_PASSWORD, DEMO_USERNAME } from './utils';

import LoginButtons from './LoginButtons';
import NavHeader from './NavHeader';

import './Navigation.css';

export class LoggedOutNav extends React.Component {
    constructor(props) {
        super(props)

        this.handleDemoClick = this.handleDemoClick.bind(this);
    };

    handleDemoClick() {
        this.props.dispatch(login(DEMO_USERNAME, DEMO_PASSWORD))
        .then(() => this.props.dispatch(getCurrentUserProfile()));
    };

    render() {

        return (
            <div className='row nav-row'>
                <NavHeader col='col-xs-12 col-md-3' {...this.props}/>
                <div className='col-xs-12 col-md-8'>
                   <a className='nav-links marg-right' href='/#overview-mark'>Overview</a>
                   <a className='nav-links marg-right' href='/#app-features'>App Features</a>
                   <a className='nav-links marg-right' onClick={this.handleDemoClick}>Demo App</a>
                </div>
               <LoginButtons />
            </div>
        );
    };
};

export default connect()(LoggedOutNav);
