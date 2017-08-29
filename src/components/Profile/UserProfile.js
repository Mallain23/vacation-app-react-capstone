import React from 'react'
import {connect} from 'react-redux'

export function UserProfile (props) {
    const {username, bio, name, favorite } = props

    return (
        <div className='profile-info'>
            <h1 className='username'>{username}</h1>
            <p className='name'>{name}</p>
            <p className='user-bio'>{bio}</p>
            <p className='favorite-destination'>{favorite}</p>
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
