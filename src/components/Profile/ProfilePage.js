import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import EditProfile from './EditProfile';
import UserProfile from './UserProfile';
import UsersPosts from './UsersPosts';
import UserProfileSettings from './UserProfileSettings'
import { getUserProfile } from '../actions/profile'

import './ProfilePage.css'

export class ProfilePage extends React.Component {

    renderProfileComponent() {
        const { username } = this.props.currentUser
        return this.props.editProfile ? <EditProfile username={username} /> : <UserProfile />
    };

    componentWillMount() {
          let profileId = this.props.match.params.profileId
          this.props.dispatch(getUserProfile(profileId))
    };

    render() {
        if (!this.props.loggedIn) {
          return <Redirect to={'/'}/>
        }

        const { username, currentUser, avatar } = this.props
        const profileSettings = currentUser.username === username ? <UserProfileSettings /> : ''

        return (
            <div className='user-profile'>
                <div className='container'>
                    <div className='row user-profile'>
                        <div className='col-xs-12 col-md-4 user-profile-left'>
                            <div className='box'>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-8 user-profile-right'>
                            <div className='box'>
                                <img src={avatar} className='profile-avatar avatar-large'/>
                                {profileSettings}
                                {this.renderProfileComponent()}
                            </div>
                        </div>
                    </div>
                    <div className='row user-posts'>
                        <UsersPosts {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {

    let { avatar, username } = state.profile.currentProfile
    let { editProfile } = state.profile

    return {
        currentUser: state.auth.currentUser,
        loggedIn: state.auth.currentUser !== null,
        username,
        avatar,
        editProfile
      };
}

export default connect(mapStateToProps)(ProfilePage)
