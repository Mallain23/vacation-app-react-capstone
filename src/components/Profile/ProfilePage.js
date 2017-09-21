import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import UserProfileSettings from './UserProfileSettings';
import { getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import { getAvatarString, sliceIndex, amount } from './utils'

import EditProfile from './EditProfile';
import UserProfile from './UserProfile';
import UsersPosts from './UsersPosts';
import UserFavorites from './UserFavorites'
import Pagination from '../Home/Pagination';
import FavoritesPagination from './FavoritesPagination'

import './ProfilePage.css';

export class ProfilePage extends React.Component {



    renderProfileComponent() {
        const { username } = this.props.currentUser
        return this.props.editProfile ? <EditProfile username={username} /> : <UserProfile {...this.props}/>
    };

    renderPosts() {
        const { profileView } = this.props;
        return profileView === 'POSTS' ? <UsersPosts {...this.props} /> : <UserFavorites {...this.props} />
    };

    renderPagination() {
      const { profileView, username } = this.props;
      return profileView === 'POSTS' ? <Pagination username={username} searchFunction={getUsersPosts} /> : <FavoritesPagination />
    };


    render() {
        if (!this.props.loggedIn) {
          return <Redirect to={'/'}/>
        }

        const { username, currentUser, firstName, lastName, pageId} = this.props

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
                    <div className='row user-posts' id='posts'>
                        {this.renderPosts()}
                    </div>
                    <div className='row'>
                        {this.renderPagination()}
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state, props) => {

    let { username, firstName, lastName } = state.profile.currentProfile
    let { editProfile, profileView } = state.profile
    const pageId = props.match.params.profileId

    return {
        currentUser: state.auth.currentUser,
        loggedIn: state.auth.currentUser !== null,
        username,
        firstName: firstName || '',
        lastName: lastName || '',
        editProfile,
        profileView,
        pageId
      };
}

export default connect(mapStateToProps)(ProfilePage)
