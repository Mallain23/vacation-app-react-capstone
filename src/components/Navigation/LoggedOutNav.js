import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import NavInput from './NavInput'
import {toggleLogin} from '../actions/users'

import './Navigation.css'

export class LoggedOutNav extends React.Component {
    constructor (props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this)

    };

    handleLoginClick (e) {
      e.preventDefault()
      this.props.dispatch(toggleLogin());
    };

    render() {

        return (
            <span>
               <div className='col-xs-12 col-md-4'>
                   <Link className='nav-links' to='/home#overview'>Overview</Link>
                   <Link className='nav-links' to='/home#destination'>Where to go?</Link>
                   <Link className='nav-links' to='/home#lodging'>Where to stay?</Link>
                   <Link className='nav-links' to='/home#acitvities' >What to do?</Link>
               </div>
               <div className='col-xs-12 col-md-2'>
                  <div className='right-nav-buttons'>
                       <Link className='nav-links' to='/#signup'>Signup</Link>
                       <a className='nav-links' onClick={this.handleLoginClick}>Login</a>
                  </div>
              </div>
           </span>
        );
    };
};




export default connect()(LoggedOutNav)
