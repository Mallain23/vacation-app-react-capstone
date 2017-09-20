import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { setEditProfileTrue } from '../actions/profile';
import { setEditPostToFalse } from '../actions/posts';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import DropdownLink from './DropdownLink';
import NavInput from './NavInput';
import Circle from './Circle';
import NavHeader from './NavHeader';

import './Navigation.css';

export class LoggedInNav extends React.Component {
    constructor (props) {
        super(props)

        this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
        this.handleLogOutClick = this.handleLogOutClick.bind(this)
    };

    handleEditProfileClick (e) {
      e.preventDefault()
      const { profileId } = this.props.currentUser

      this.props.dispatch(setEditProfileTrue())
      this.props.history.push(`../profile/${profileId}`)
    };

    handleLogOutClick (e) {
       e.preventDefault()
       this.props.dispatch(setCurrentUser(null));
       this.props.dispatch(setAuthToken(null));

       clearAuthToken();
    };

    render() {
        const username = this.props.currentUser.username.toUpperCase()

        return (
            <div className='row nav-row'>
                <NavHeader col='col-sm-12 col-md-3 profile-btn' {...this.props} />
                <NavInput {...this.props}/>
                <div className='col-sm-3 col-md-3 nav-drop'>
                    <div className='dropdown nav-heading marg-left'>
                        <a href="javascript:void(0)" className="dropbtn nav-links right-side profile-btn">{username}</a>
                        <div className="dropdown-items">
                            <a className='nav-links' onClick={this.handleEditProfileClick} id='edit-profile'> Edit Profile</a>
                            <a className='log-out nav-links' onClick={this.handleLogOutClick} id='log-out'>Log Out</a>
                        </div>
                    </div>
                </div>
                <Circle {...this.props}/>
            </div>
        );
    };
};

const mapStateToProps = state => {
    let { currentUser } = state.auth

    return {
        loggedIn: currentUser !== null,
        currentUser: currentUser
    };
};

export default connect(mapStateToProps)(LoggedInNav)
