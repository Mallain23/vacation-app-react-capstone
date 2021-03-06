import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {required, nonEmpty} from '../validators/validators';
import { login } from '../actions/auth';
import { getCurrentUserProfile } from '../actions/ajaxCallsToUserRoute';

import Input from '../Inputs/Input';

import './Modal.css';

export class LoginForm extends React.Component {

    onSubmit(values) {
        this.props.dispatch(login(values.username, values.password))
        .then(() => this.props.dispatch(getCurrentUserProfile()));
    };

    render() {

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label className='auth-label' htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label className='auth-label' htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className='oval-button auth-button' disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    };
};

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
