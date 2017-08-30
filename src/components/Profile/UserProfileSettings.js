import React from 'react'
import {connect} from 'react-redux'

import { setCurrentUser, setAuthToken } from '../actions/auth'
import {setEditProfileTrue} from '../actions/profile'
import {clearAuthToken} from '../local-storage';

export class UserProfileSettings extends React.Component {
    constructor (props) {
        super(props)

        this.handleEdit = this.handleEdit.bind(this)
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    handleEdit(e) {
        e.preventDefault()
        this.props.dispatch(setEditProfileTrue())
    };

    handleLogOut(e) {
       this.props.dispatch(setCurrentUser(null));
       this.props.dispatch(setAuthToken(null));
       clearAuthToken();
    };

    render() {
        return (
            <div className='user-profile-settings'>

                <a onClick={this.handleEdit} className="edit-profile profile-settings">Edit</a>
                |
                <a onClick={this.handleLogOut} className="logout profile-settings">Log Out</a>
            </div>
        )
    };
};

const mapStateToProps = state => ({

    currentUser: state.auth.currentUser.username,
    viewUser: state.profile.username
})

export default connect(mapStateToProps)(UserProfileSettings)
