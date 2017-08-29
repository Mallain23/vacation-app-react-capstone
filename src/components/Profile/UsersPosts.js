import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Post from '../Home/Post'

export class UserPosts extends React.Component {
  render() {
      let userPosts

      if (this.props.posts) {
          let editProp
          userPosts = this.props.posts.map((post, index) => {
              editProp = post.username === this.props.currentUser ? true : false
              return <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                    <div className='post-box' key={index}>
                        <Post allowEdit={editProp}
                              key={index} postId={post.postId}
                              {...this.props}
                              username={this.props.username}
                              profileId={post.profileId}
                              name={post.name} />
                    </div>
                </div>
          });
      }

        return (
            <div className="users-posts">
              {userPosts}
            </div>
        )
    }
}


const mapStateToProps = state => ({

    posts: state.profile.usersPosts,
    currentUser: state.auth.currentUser.username

})

export default connect(mapStateToProps)(UserPosts)
