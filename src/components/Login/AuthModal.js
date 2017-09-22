import React from 'react';
import { Modal } from 'react-bootstrap';
import {connect} from 'react-redux';

import { LOGIN_TITLE, SIGNUP_TITLE } from './utils';
import { closeAuthModal } from '../actions/users';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

import './Modal.css'

export class AuthModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this);
    };

    handleClose() {

        this.props.dispatch(closeAuthModal());
    };

    renderForm(e) {
        const { showLogin } = this.props

        return showLogin ? <LoginForm /> : <RegistrationForm />
    }

    renderTitle() {
        const { showLogin } = this.props

        return showLogin ? LOGIN_TITLE : SIGNUP_TITLE
    }

    render() {
        const { showAuthModal } = this.props;

        return (
              <div className="authentication-modal">
                  <Modal className="auth-modal" show={showAuthModal}
                         onHide={this.handleClose}
                         container={this}
                         aria-labelledby="auth-modal">
                          <div className='modal-header' closeButton>
                              <div className='modal-title' id="edit-page-modal">
                                  {this.renderTitle()}
                              </div>
                          </div>
                      <Modal.Body className='modal-body'>
                          {this.renderForm()}
                      </Modal.Body>
                      <div className='modal-footer'>
                          <button
                              disabled={this.props.submitting}
                              onClick={this.handleClose}
                              className='oval-button auth-close-button'>
                              Cancel
                          </button>
                    </div>
                </Modal>
              </div>
        );
    };
};

const mapStateToProps = state => {
    const { showLogin, showAuthModal } = state.auth

    return {
      showLogin,
      showAuthModal
    };
};

export default connect(mapStateToProps)(AuthModal)
