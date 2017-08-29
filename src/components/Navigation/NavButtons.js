import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import DropdownLink from './DropdownLink'
import NavInput from './NavInput'
import {toggleLogin} from '../actions/users'
import {toggleEditProfile} from '../actions/profile'
import { setCurrentUser, setAuthToken } from '../actions/auth'
import {clearAuthToken} from '../local-storage';

import './Navigation.css'

export class NavButtons extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    handleClick (e) {
      e.preventDefault()
      this.props.dispatch(toggleLogin());
    }

    handleEditClick(e) {
      e.preventDefault()
      const {profileId} = this.props.currentUser

      this.props.dispatch(toggleEditProfile())
      this.props.history.push(`../profile/${profileId}`)
    }

    handleLogOut(e) {
       e.preventDefault()
       this.props.dispatch(setCurrentUser(null));
       this.props.dispatch(setAuthToken(null));
       clearAuthToken();
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

        return (
             <span>
                 <div className='col-xs-12 col-md-2'>
                     <div className='box-navigation'>
                         <div className='dropdown'>
                             <a href="javascript:void(0)" className="dropbtn nav-links">Sort Posts</a>
                             <div className="dropdown-items">
                                 <DropdownLink value='Most Recent'id='most-recent'/>
                                 <DropdownLink value='Most Visited Destinations'id='most-visited'/>
                                 <DropdownLink value='Highest Rated Destinations'id='highest-rated'/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className='col-xs-12 col-md-5'>
                         <NavInput {...this.props}/>
                 </div>
                 <div className='col-xs-12 col-md-3'>
                    <div className='dropdown'>
                        <a href="javascript:void(0)" className="dropbtn nav-links">{this.props.currentUser.username}</a>
                        <div className="dropdown-items">
                            <a className='nav-links' onClick={this.handleEditClick} id='edit-profile'> Edit Profile</a>
                            <a className='log-out' onClick={this.handleLogOut} id='log-out'>Log Out</a>
                        </div>
                    </div>
                    <Link className='round-button' to='/create-post'> + </Link>
                </div>
             </span>
        )
    }
}


const mapStateToProps = state => {
    let { currentUser } = state.auth

    return {
        loggedIn: currentUser !== null,
        currentUser: currentUser
    };
};

export default connect(mapStateToProps)(NavButtons)
