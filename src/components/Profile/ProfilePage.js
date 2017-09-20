import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import UserProfileSettings from './UserProfileSettings';
import { getUserProfile } from '../actions/ajaxCallsToUserRoute';
import { getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import { getAvatarString } from './utils';

import EditProfile from './EditProfile';
import UserProfile from './UserProfile';
import UsersPosts from './UsersPosts';
import Pagination from '../Home/Pagination';

import './ProfilePage.css';

export class ProfilePage extends React.Component {

    renderProfileComponent() {
        const { username } = this.props.currentUser
        return this.props.editProfile ? <EditProfile username={username} /> : <UserProfile />
    };

    componentWillMount() {
          const profileId = this.props.match.params.profileId
          const sliceIndex = 0

          this.props.dispatch(getUserProfile(profileId))
          .then(({profile: {username}}) => {
            this.props.dispatch(getUsersPosts(username, sliceIndex, 8))
          })
    };

    render() {
        if (!this.props.loggedIn) {
          return <Redirect to={'/'}/>
        }

        const { username, currentUser, firstName, lastName} = this.props

        const avatarString = getAvatarString(firstName, lastName)
        const profileSettings = currentUser.username === username ? <UserProfileSettings /> : ''

        return (
            <div className='user-profile profile-marg'>
                <div className='container'>
                    <div className='row user-profile'>
                        <div className='col-xs-12 upper-profile'>
                            <div className='row'>
                                <div className='col-xs-12'>
                                    <div className='profile-avatar'>
                                        {avatarString}
                                    </div>
                                </div>
                                <div className='col-xs-12'>
                                    {profileSettings}
                                </div>
                            </div>
                            <div className='row'>
                              {this.renderProfileComponent()}
                            </div>
                        </div>
                    </div>
                    <div className='row user-posts'>
                        <UsersPosts {...this.props} />
                    </div>
                    <div className='row'>
                        <Pagination username={username} searchFunction={getUsersPosts} />
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {

    let { username, firstName, lastName } = state.profile.currentProfile
    let { editProfile } = state.profile

    return {
        currentUser: state.auth.currentUser,
        loggedIn: state.auth.currentUser !== null,
        username,
        firstName: firstName || '',
        lastName: lastName || '',
        editProfile
      };
}

export default connect(mapStateToProps)(ProfilePage)
