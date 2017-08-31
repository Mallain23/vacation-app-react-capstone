import React from 'react';

import 'react-router-modal/css/react-router-modal.css'
import LoginForm from './LoginForm'
import {toggleLogin} from '../actions/app'
import {connect} from 'react-redux'

export class LoginModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(e) {
      e.preventDefault()
      this.props.dispatch(toggleLogin())
    };

    render() {
        return (
            <div className="overay" id="login-modal">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" onClick={this.handleClick}>
                              <span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                          </button>
                          <h3 className="modal-title">Login to your Account</h3>
                      </div>
                      <div className="modal-body login-modal">
                          <LoginForm />
                      </div>
                  </div>
              </div>
        );
    };
};

export default connect()(LoginModal)
