import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './ProfilePage.css'

export class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
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
                                <img src={this.props.avatar} className='profile-avatar avatar-large'/>
                                <div className='profile-info'>
                                    <h1 className='profile-name'>{this.props.username}</h1>
                                    <p className='user-bio'>{this.props.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    let profileId = props.match.params.profileId

    let profileArray = state.users.find(user => user.profileId.toString() === profileId)

    let {bio, avatar, username } = profileArray

    return {
        bio,
        username,
        avatar
      };
}

export default connect(mapStateToProps)(ProfilePage)
