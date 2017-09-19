import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';

import TextArea from '../Inputs/TextArea'
import Input from '../Inputs/Input'
import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators/validators'
import {createPost, editPost, fetchSelectedPost} from '../actions/ajaxCallsToPostRoute'
import {setEditPostTrue} from '../actions/posts'

import './Post.css'

export class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {
        if (this.props.isEditing) {
              let postId = this.props.match.params.postId

              this.props.dispatch(fetchSelectedPost(postId))
              .then(({ post }) => this.handleInitialize(post))
          }
      };

    handleInitialize(postObj) {
        this.props.initialize(postObj)
    };

    renderButtonText() {
      return this.props.isEditing ? 'Edit Post' : 'Create Post'
    };

    onSubmit(values) {

        if (!this.props.isEditing) {

            const { username, name, profileId } = this.props
            let newValueObj = Object.assign({}, values, {
                  username,
                  name,
                  profileId
            });

            return this.props.dispatch(createPost(newValueObj))
            .then(({ post }) => this.props.history.push(`/post/${post.postId}`));
        }

        this.props.dispatch(editPost(values))
        .then(({ post }) => this.props.history.push(`/post/${post.postId}`));
    };

    handleCancel() {
        this.props.dispatch(setEditPostTrue())
        this.props.history.push(`/`);
    };

    render() {
        return (
            <form
                className="manage-post-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label className='edit-post-label' htmlFor="title">Title</label>
                <Field
                    component={Input}
                    className='post-form-input'
                    placeholder='Enter a Title for your Post'
                    type="text"
                    name="title"
                    validate={[required, nonEmpty]} />
                    <label className='edit-post-label' htmlFor="destination">Where did you go?</label>
                    <Field
                        component={Input}
                        className='post-form-input'
                        placeholder='Location (Can be City/State/Country)'
                        type="text"
                        name="destination"
                        validate={[required, nonEmpty]} />
                    <label className='edit-post-label' htmlFor="lodging">Where did you Stay?</label>
                    <Field
                        component={TextArea}
                        className='post-form-input'
                        type="text"
                        name="lodging"
                        placeholder='Tell us about the place(s) you stayed! Be as detailed and descriptive as possible!'/>
                    <label className='edit-post-label' htmlFor="dining">Where did you eat?</label>
                    <Field
                        component={TextArea}
                        className='post-form-input'
                        type="textbox"
                        name="dining"
                        placeholder='Tell us about the place(s) you ate! Be as detailed and descriptive as possible!' />
                    <label className='edit-post-label' htmlFor="sites">What sites did you see?</label>
                    <Field
                        component={TextArea}
                        className='post-form-input'
                        type="textbox"
                        name="sites"
                        placeholder='Tell us about the sites you saw! (e.g. Statue of Liberty, Empire State Building, Museums) Be as detailed and descriptive as possible!' />
                    <label className='edit-post-label' htmlFor="activities">What activities did you do?</label>
                    <Field
                        component={TextArea}
                        className='post-form-input'
                        type="textbox"
                        name="activities"
                        placeholder='Tell us about the activities that you did! (e.g. Guided Tours, Hiking, Safaris, Zip-Lining ) Be as detailed and descriptive as possible!' />
                    <label className='edit-post-label' htmlFor="advice">Advice for Other Travelers</label>
                    <Field
                        component={TextArea}
                        className='post-form-input'
                        type="textbox"
                        name="advice"
                        placeholder='Use this section to give other travels advice and tips about traveling to this destination. (e.g. favorite or least favorite things, things to avoid, things you would have done differently or the same )' />
                    <label className='edit-post-label' htmlFor="rating">Rate your Trip!</label>
                    <Field
                        component={Input}
                        className='post-form-input'
                        type="number"
                        name="rating"
                        placeholder='Rate your trip on a scale of 1 to 10!'
                        validate={[required, isNumber, validValue]} />
                    <div className='create-edit-button-container'>
                        <button
                            type="submit"
                            className='oval-button create-edit-button'
                            disabled={this.props.pristine || this.props.submitting}>
                            {this.renderButtonText()}
                        </button>
                        <button
                            className='oval-button create-edit-button'
                            disabled={this.props.submitting}
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
        )
    }
};

export default PostForm = reduxForm({
    form: 'manage-post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('manage-post', Object.keys(errors)[0]))
})(PostForm);
