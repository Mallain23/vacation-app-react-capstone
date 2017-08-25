import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import TextArea from '../Inputs/TextArea'
import Input from '../Inputs/Input'
import {fetchSelectedPost} from '../actions/protected-data'
import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators/validators'
import {createPost, editPost} from '../actions/protected-data'

export class PostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.isEditting) {
              let postId = this.props.match.params.postId
              this.props.dispatch(fetchSelectedPost(postId))

              .then(postObj => this.handleInitialize(postObj.post))
          }
      }


    handleInitialize(postObj) {
        this.props.initialize(postObj)
    }

    renderButtonText() {
      return this.props.isEditting ? 'Edit Post' : 'Create Post'
    }

    onSubmit(values) {
        console.log('made it', this.props.isEditting)
        if (!this.props.isEditting) {
            console.log(this.props.username)
            let newValueObj = Object.assign({}, values, {username: this.props.username, name: this.props.name})
              return this.props.dispatch(createPost(newValueObj))

            .then((postObj) => {
              console.log(this.props, postObj)
              this.props.history.push(`/post/${postObj.post.postId}`)
          })

        }

        this.props.dispatch(editPost(values))

        .then((postObj) => {

          this.props.history.push(`/post/${postObj.post.postId}`)

        })

    }


    render() {
        console.log(this.props.handleSubmit)
        return (

              <form
                  className="create-post-form"
                  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                  >
                  <label htmlFor="title">Title of Post</label>
                  <Field component={Input} placeholder='My amazing trip two week trip to Hawaii!' type="text" name="title" validate={[required, nonEmpty]} />
                  <label htmlFor="destination">Where did you go?</label>
                  <Field component={Input} placeholder='Location (Can be City/State/Country)' type="text" name="destination" validate={[required, nonEmpty]} />
                  <label htmlFor="lodging">Where did you Stay?</label>
                  <Field
                      component={TextArea}
                      writing={"The Rennasiance Inn"}
                      type="text"
                      name="lodging"
                      placeholder='Tell us about the place(s) you stayed! Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="dining">Where did you eat?</label>
                  <Field
                      component={TextArea}
                      className='textarea'
                      type="textbox"
                      name="dining"
                      placeholder='Tell us about the place(s) you ate! Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="sites">What sites did you see?</label>
                  <Field
                      component={TextArea}
                      type="textbox"
                      name="sites"
                      placeholder='Tell us about the sites you saw! (e.g. Statue of Liberty, Empire State Building, Museums) Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="activities">What activities did you do?</label>
                  <Field
                      component={TextArea}
                      type="textbox"
                      name="activities"
                      placeholder='Tell us about the activities that you did! (e.g. Guided Tours, Hiking, Safaris, Zip-Lining ) Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="advice">Advice for other travels</label>
                  <Field
                      component={TextArea}
                      type="textbox"
                      name="advice"
                      placeholder='Use this section to give other travels advice and tips about traveling to this destination. (e.g. favorite or least favorite things, things to avoid, things you would have done differently or the same )'
                  />
                  <label htmlFor="rating">Rate your trip!</label>
                  <Field
                      component={Input}
                      type="number"
                      name="rating"
                      placeholder='Rate your trip on a scale of 1 to 10!'
                      validate={[required, isNumber, validValue]}
                  />
                  <button
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}>
                      {this.renderButtonText()}
                  </button>
                  <button
                      disabled={this.props.submitting}>
                      <Link to={'/'}>
                      Cancel
                      </Link>
                  </button>
                  </form>
        )
    }
}


export default PostForm = reduxForm({
    form: 'create-post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('create-post', Object.keys(errors)[0]))
})(PostForm);
