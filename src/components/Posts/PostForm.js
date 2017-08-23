import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';

import TextArea from '../Inputs/TextArea'
import Input from '../Inputs/Input'
import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators/validators'

export class PostForm extends React.Component {

    onSubmit(values) {
       console.log(values)
    }
    componentDidMount() {
      console.log(this.props.Id)
      if (this.props.postId) {
        this.handleInitialize()
      }
    }
    handleInitialize() {
      const initData ={
      'title': this.props.heading,
      'dining': this.props.content
    }
    this.props.initialize(initData)
    }
    render() {
        return (

              <form
                  className="create-post-form"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
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
                      validate={[required, nonEmpty, isNumber, validValue]}
                  />
                  <button
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}>
                      Create Post
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
