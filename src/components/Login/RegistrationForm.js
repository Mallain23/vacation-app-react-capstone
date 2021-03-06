import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from '../Inputs/Input';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators/validators';

import './Modal.css';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
         const {username, password, firstName, lastName} = values;
         const user = {username, password, firstName, lastName};

         return this.props
             .dispatch(registerUser(user))
             .then(user => {
              this.props.dispatch(login(username, password));
            })
     };

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label className='auth-label' htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label className='auth-label' htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label className='auth-label' htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label className='auth-label' htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <label className='auth-label' htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <button
                    type="submit"
                    className='oval-button register-button'
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        )
    }
};

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
