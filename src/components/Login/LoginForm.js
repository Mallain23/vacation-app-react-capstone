import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../Inputs/Input';
import { login } from '../actions/auth';
import { toggleLogin } from '../actions/users'
import {required, nonEmpty} from '../validators/validators';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    handleClick() {
        this.props.dispatch(toggleLogin())
    }

    render() {

        const { error } = this.props

        const error ? <FieldError text={error} /> : null;
        // const error ? (
        //         <div className="form-error" aria-live="polite">
        //             {this.props.error}
        //         </div>
        //     );
        // }

        const buttonDisabled = this.props.pristine || this.props.submitting;
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={buttonDisabled}>
                    Log in
                </button>
                <button onClick={this.handleClick} disabled={this.props.submitting}>
                    Cancel
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
