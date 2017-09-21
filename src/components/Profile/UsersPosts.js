import React from 'react'
import {connect} from 'react-redux'

import { formatPosts, postLanguage } from './utils'

import Post from '../Home/Post'

export function UserPosts (props) {

    const { posts, newPropObj } = props

    const userPosts = formatPosts(posts, newPropObj, postLanguage)

    return (
        <div className="users-posts">
          {userPosts}
        </div>
    );
};


const mapStateToProps = (state, props) => {
    const newPropObj = Object.assign({}, props)
    const { usersPosts: posts } =  state.profile
    const { currentUser } = state.auth.currentUser

    return {
      newPropObj,
      posts,
      currentUser
    };
};

export default connect(mapStateToProps)(UserPosts)
