import React from 'react';
import {connect} from 'react-redux';

import ProfileButtons from './ProfileButtons';

import './ProfilePage.css';

export class UserProfile extends React.Component {

    render() {

        const {username, bio, name, favorite } = this.props;

        return (
            <div className='col-xs-12 profile-info'>
                <h1 className='profile-username'>{username}</h1>
                <p className='name'>{name}</p>
                <p className='user-bio'><span className='profile-bold'>Bio:</span> {bio}</p>
                <p className='favorite-destination'><span className='profile-bold'>Favorite Destination: </span> {favorite}</p>
                <ProfileButtons />
            </div>
        )
    };
};

const mapStateToProps = state => {
    let {bio, username, firstName, lastName, favorite, profileView } = state.profile.currentProfile

    return {
          bio,
          username,
          favorite,
          profileView,
          name: `${firstName} ${lastName}`
    };
};

export default connect(mapStateToProps)(UserProfile);
