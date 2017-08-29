import React from 'react'
import {connect} from 'react-redux'

export class UserProfile extends React.Component {

    render() {

        return (
                  <div className='profile-info'>
                      <h1 className='profile-name'>{this.props.username}</h1>
                      <p className='user-bio'>{this.props.bio}</p>
                  </div>
        )
    }
}

const mapStateToProps = state => {
    let {bio, username} = state.profile.currentProfile

    return {
          bio,
          username
    };
}

export default connect(mapStateToProps)(UserProfile)
