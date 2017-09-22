import React from 'react';
import {connect} from 'react-redux';

import { openLoginForm, openSignupForm } from '../actions/users';

import './LandingPage.css';

export class SignUp extends React.Component {
    constructor(props) {
        super(props)

    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    };

    handleSignupClick (e) {
        e.preventDefault();

        this.props.dispatch(openSignupForm())
    };

    handleLoginClick(e) {
      e.preventDefault();

      this.props.dispatch(openLoginForm());

    };

    render() {
        return (
            <div id='signup-container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h2 className='signup-title'>Start Planning Now.</h2>
                    </div>
                    </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='signup-button-container'>
                            <button className='signup-btn marg-right' onClick={this.handleSignupClick}>Sign Up</button>
                            <button className='signup-btn' onClick={this.handleLoginClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default connect()(SignUp)
