import React from 'react'

export default class CreatePostForm extends React.Component {

    render() {
        return (
            <div className='box create-post'>
              <h1 className='form-heading'>Create New Post</h1>
              <form
                  className="create-post-form"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
                  <label htmlFor="title">Title of Post</label>
                  <Field component={Input} placeholder='My amazing trip two week trip to Hawaii!' type="text" name="title" validate={[required, nonEmpty]} />
                  <label htmlFor="destination">Where did you go?</label>
                  <Field component={Input} placeholder='Hawaii' type="text" name="destination" validate={[required, nonEmpty]} />
                  <label htmlFor="lodging">Where did you Stay</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="lodging"
                      placeholder='Tell us about the place(s) you stayed! Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="dining">Where did you eat?</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="dining"
                      placeholder='Tell us about the place(s) you ate! Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="sites">Where did you eat?</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="sites"
                      placeholder='Tell us about the sites you saw! (e.g. Statue of Liberty, Empire State Building) Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="sites">What sites did you see?</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="sites"
                      placeholder='Tell us about the sites you saw! (e.g. Statue of Liberty, Empire State Building, Museums) Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="activities">What activities did you do?</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="activities"
                      placeholder='Tell us about the activities that you did! (e.g. Guided Tours, Hiking, Safaris, Zip-Lining ) Be as detailed and descriptive as possible!'
                  />
                  <label htmlFor="advice">Advice for other travels</label>
                  <Field
                      component={Input}
                      type="textarea"
                      name="advice"
                      placeholder='Use this section to give other travels advice and tips about traveling to this destination. (e.g. favorite or least favorite things, things to avoid, things you would have done differently or the same )'
                  />
                  <label htmlFor="rating">Rate your trip!</label>
                  <Field
                      component={Input}
                      type="number"
                      name="rating"
                      placeholder='Rate your trip on a scale of 1 to 10!'
                      validate={[required, nonEmpty]}

                  </form>
            </div>

        )
    }
}
