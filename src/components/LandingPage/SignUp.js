import React from 'react'
import RegistrationForm from './RegistrationForm'

import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'


export class SignUp extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (
              <div id='signup'>
                  <div className='row'>
                      <div className='col-xs-12'>
                          <h2>Start Planning Now!</h2>
                          <div className='signup-box'>
                              <RegistrationForm />
                              <a >Already registered? Click here to login</a>
                          </div>
                      </div>
                  </div>
              </div>
        )
    }
}

export default connect()(SignUp)
