import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Post from '../Home/Post'

export default class UserPosts extends React.Component {
  render() {

      let userPosts = this.props.posts.map((post, index) => {
          return <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                    <div className='post-box' key={index}>
                        <Post key={index} postId={post.postId} heading={post.heading} username={this.props.username} profileId={post.profileId} content={post.content} name={post.name} />
                    </div>
                </div>
        });

        return (
            <div className="users-posts">
              {userPosts}
            </div>
        )
    }
}
