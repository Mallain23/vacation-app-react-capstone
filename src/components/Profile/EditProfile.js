import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import {editProfile} from '../actions/profile'
import {fetchSelectedUser} from '../actions/protected-data'
import { required, nonEmpty } from '../validators/validators'
import TextArea from '../Inputs/TextArea'
import Input from '../Inputs/Input'

import './ProfilePage.css'

export class EditProfile extends React.Component {

    componentDidMount() {

              this.props.dispatch(fetchSelectedUser(this.props.username))

              .then(profileObj => {
              
                  this.handleInitialize(profileObj.user)
                })
          }


    handleInitialize(postObj) {
        this.props.initialize(postObj)
    }

    onSubmit (values) {
        this.props.dispatch(editProfile(values))
    }

    render() {

        return (
            <div className='edit profile'>
                <form
                    className="edit-profile-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                    >
                    <span className='hide'>
                        <label htmlFor="username">Username</label>
                        <Field component={Input} type="text" name="username" />
                    </span>
                    <label htmlFor="firstName">First Name</label>
                    <Field component={Input} type="text" name="firstName" validate={[required, nonEmpty]} />
                    <label htmlFor="lastName">Last Name</label>
                    <Field component={Input} type="text" name="lastName" validate={[required, nonEmpty]} />
                    <label htmlFor="bio">Bio</label>
                    <Field
                        component={TextArea}
                        type="text"
                        name="bio"
                        placeholder='Tell us about yourself!'
                    />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default EditProfile = reduxForm({
    form: 'edit-profile',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-', Object.keys(errors)[0]))
})(EditProfile);
