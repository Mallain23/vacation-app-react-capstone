import React from 'react'
import {connect} from 'react-redux'

import './ProfilePage.css'

export function UserProfile (props) {
    const {username, bio, name, favorite } = props

    return (
        <div className='col-xs-12 profile-info'>
            <h1 className='profile-username'>{username}</h1>
            <p className='name'>{name}</p>
            <p className='user-bio'><span className='profile-bold'>Bio:</span> {bio}</p>
            <p className='favorite-destination'><span className='profile-bold'>Favorite Destination: </span> {favorite}</p>
        </div>
    )
};

const mapStateToProps = state => {
    let {bio, username, firstName, lastName, favorite } = state.profile.currentProfile

    return {
          bio,
          username,
          favorite,
          name: `${firstName} ${lastName}`
    };
}

export default connect(mapStateToProps)(UserProfile)
