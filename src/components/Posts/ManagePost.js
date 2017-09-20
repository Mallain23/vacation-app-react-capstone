import React from 'react'
import PostForm from './PostForm'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import './Post.css'

export function ManagePost (props) {

    if (!props.isLoggedIn) {
        return <Redirect to={'/'} />
    }

    let formHeading = props.isEditing ?  "Edit Post" : "Create New Post";

    return (
        <div className='container new-post-container'>
            <div className='row'>
                <div className='col-xs-12 col-lg-8'>
                    <div className='box create-post'>
                        <div className='heading-container'>
                            <h1 className='form-heading'>{formHeading}</h1>
                        </div>
                        <PostForm {...props}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { username, firstName, lastName, profileId } = state.auth.currentUser

    return {
        isLoggedIn: state.auth.currentUser !== null,
        username,
        name: `${firstName} ${lastName}`,
        profileId,
        isEditing: state.profile.editPost
    }
}

export default connect(mapStateToProps)(ManagePost)
