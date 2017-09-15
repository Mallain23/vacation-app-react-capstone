import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {connect} from 'react-redux';

import { LOGIN_TITLE, SIGNUP_TITLE } from './utils';
import { closeAuthModal } from '../actions/users';

import RegistrationForm from '../LandingPage/RegistrationForm';
import LoginForm from './LoginForm';

export class AuthModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this);
    };

    handleClose(e) {
        e.preventDefault();
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
        console.log(showAuthModal)

        return (
              <div className="authentication-modal">
                  <Modal className="auth-modal" show={showAuthModal}
                         onHide={this.handleClose}
                         container={this}
                         aria-labelledby="auth-modal">
                      <Modal.Header className='modal-header' closeButton>
                          <Modal.Title id="edit-page-modal">{this.renderTitle()} </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='modal-body'>
                          {this.renderForm()}
                      </Modal.Body>
                      <Modal.Footer className='moda-footer'>
                          <Button
                              disabled={this.props.submitting}
                              onClick={this.handleClose}
                              className='modal-button'>
                              Cancel
                          </Button>
                    </Modal.Footer>
                </Modal>
              </div>
        );
    };
};

const mapStateToProps = state => {
    const { showLogin, showAuthModal } = state.auth
    console.log(state)
    return {
      showLogin,
      showAuthModal
    };
};

export default connect(mapStateToProps)(AuthModal)
