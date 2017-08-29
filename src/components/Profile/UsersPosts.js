import React from 'react'
import {connect} from 'react-redux'

import Post from '../Home/Post'

export function UserPosts (props) {

    let userPosts

    if (props.posts) {
        const { username, currentUser, posts } = props
        const allowEdit = username === currentUser ? true : false;

        userPosts = posts.map(({ postId, username, profileId, name }, index) => {

            return <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                  <div className='post-box' key={index}>
                      <Post allowEdit={allowEdit}
                            key={index} postId={postId}
                            {...props}
                            username={username}
                            profileId={profileId}
                            name={name} />
                  </div>
              </div>
        });
    }

    return (
        <div className="users-posts">
          {userPosts}
        </div>
    )
};


const mapStateToProps = state => ({

    posts: state.profile.usersPosts,
    currentUser: state.auth.currentUser.username

})

export default connect(mapStateToProps)(UserPosts)
