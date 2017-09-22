import React from 'react';
import { connect } from 'react-redux';

import { openLoginForm, openSignupForm } from '../actions/users';

import './Navigation.css';

export class LoginButtons extends React.Component {
    constructor (props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    };

    handleLoginClick (e) {
      e.preventDefault();

      this.props.dispatch(openLoginForm());
    };

    handleSignupClick (e) {
        e.preventDefault();

        this.props.dispatch(openSignupForm());
    };

    render() {
        return (
            <div className='col-xs-12 col-md-2'>
                    <a className='nav-links right-side'onClick={this.handleSignupClick}>Signup</a>
                    <a className='nav-links right-side' onClick={this.handleLoginClick}>Login</a>
               </div>
        );
    };
};

export default connect()(LoginButtons);
