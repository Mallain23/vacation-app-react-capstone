import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import DropdownLink from './DropdownLink'
import NavInput from './NavInput'
import {toggleLogin} from '../actions/app'

import './Navigation.css'

export class NavButtons extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
      e.preventDefault()
      this.props.dispatch(toggleLogin());
    }

    render() {

        if(!this.props.loggedIn) {

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
                         <a className='nav-links' onClick={this.handleClick}>Login</a>
                    </div>
                </div>
             </span>
            )
        }
        console.log(this.props.username)
        return (
             <span>
                 <div className='col-xs-12 col-md-2'>
                     <div className='box-navigation'>
                         <div className='dropdown'>
                             <a href="javascript:void(0)" className="dropbtn nav-links">Sort Posts</a>
                             <div className="dropdown-items">
                                 <DropdownLink value='Most Recent'id='most-recent'/>
                                 <DropdownLink value='Most Visited'id='most-visited'/>
                                 <DropdownLink value='Highest Rated'id='highest-rated'/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className='col-xs-12 col-md-5'>
                         <NavInput />
                 </div>
                 <div className='col-xs-12 col-md-3'>
                        <Link className='nav-links' to={`/profile/${this.props.profileId}`}>{this.props.currentUser.username}</Link>
                        <Link className='round-button' to='/create-post'> + </Link>
                  </div>
             </span>
        )
    }
}


const mapStateToProps = state => {

  return {
      loggedIn: state.auth.currentUser !== null,
      currentUser: state.auth.currentUser,
      profileId: state.app.auth.profileId
  }
}

export default connect(mapStateToProps)(NavButtons)
