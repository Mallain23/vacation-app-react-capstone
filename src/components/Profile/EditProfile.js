import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';

import {fetchSelectedUser, editProfile } from '../actions/ajaxCallsToUserRoute'
import { required, nonEmpty, length } from '../validators/validators'
import TextArea from '../Inputs/TextArea'
import Input from '../Inputs/Input'
import ImageInput from './ImageInput'

import './ProfilePage.css'

export class EditProfile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSelectedUser(this.props.username))
        .then(({ user }) => this.handleInitialize(user))
    };

    handleInitialize(postObj) {
        this.props.initialize(postObj)
    };

    onSubmit (values) {
        this.props.dispatch(editProfile(values))
    };

    render() {

        return (
            <div className='col-xs-12 edit-profile'>
                <form
                    className="edit-profile-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                    <span className='hide'>
                        <label htmlFor="username">Username</label>
                        <Field component={Input} type="text" name="username" />
                    </span>
                    <label className='edit-profile-label' htmlFor="firstName">First Name</label>
                    <Field component={Input} type="text" name="firstName" validate={[required, nonEmpty]} />
                    <label className='edit-profile-label'  htmlFor="lastName">Last Name</label>
                    <Field component={Input} type="text" name="lastName" validate={[required, nonEmpty]} />
                    <label className='edit-profile-label'  htmlFor="bio">Bio</label>
                    <Field
                        component={TextArea}
                        type="text"
                        name="bio"
                        validate={[required, length({max: 150})]}
                        placeholder='Tell us about yourself! (Max 150 Characters)'
                    />
                    <label className='edit-profile-label' htmlFor="favorite">Favorite Destination</label>
                    <Field
                        component={Input}
                        type="text"
                        name="favorite"
                        validate={[required, length({max: 25})]}
                        placeholder="Where is your favorite travel destination? (Max 25 Characters)"
                    />
                    <div className='profile-button-container'>
                        <button
                            type="submit"
                            className='oval-button edit-profile-button'
                            disabled={this.props.submitting}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default EditProfile = reduxForm({
    form: 'edit-profile',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-', Object.keys(errors)[0]))
})(EditProfile);
