import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { setEditProfileTrue } from '../actions/profile';
import { setEditPostToFalse } from '../actions/posts';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { fetchSelectedPost, getUsersPosts  } from '../actions/ajaxCallsToPostRoute';
import {  fetchSelectedUser, getUserProfile } from '../actions/ajaxCallsToUserRoute';
import { sliceIndex, amount } from '../Home/utils'

import DropdownLink from './DropdownLink';
import NavInput from './NavInput';
import Circle from './Circle';
import NavHeader from './NavHeader';

import './Navigation.css';

export class LoggedInNav extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleLogOutClick = this.handleLogOutClick.bind(this)
    };

    handleClick(e) {
        e.preventDefault()
        const { profileId } = this.props

        this.props.dispatch(getUserProfile(profileId))
        .then(({profile: {username}}) => this.props.dispatch(getUsersPosts(username, sliceIndex, amount)))
        .then(() => this.props.history.push(`/profile/${profileId}`))
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
                <NavHeader col='col-sm-12 col-md-3' {...this.props} />
                    <NavInput {...this.props}/>
                    <div className='col-sm-3 col-md-3 nav-drop'>
                        <div className='dropdown nav-heading marg-left'>
                            <a href="javascript:void(0)" className="dropbtn nav-links right-side profile-btn">{username}</a>
                            <div className="dropdown-items">
                                <a className='nav-links drop-down-font' onClick={this.handleClick} id='edit-profile'> My Profile</a>
                                <a className='log-out nav-links drop-down-font' onClick={this.handleLogOutClick} id='log-out'>Log Out</a>
                            </div>
                        </div>
                    </div>
                <Circle {...this.props}/>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    const { profileId } = state.profile.myProfile;

    return {
        loggedIn: currentUser !== null,
        currentUser: currentUser,
        profileId
    };
};

export default connect(mapStateToProps)(LoggedInNav)
