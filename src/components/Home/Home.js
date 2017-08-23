import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

export class Home extends React.Component {


    render() {

       let posts = this.props.posts.map((post, index) => {

        return  <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
            <div className='post-box' key={index}>
                <Post key={index} postId={post.postId} heading={post.heading} username={post.username} profileId={post.profileId} content={post.content} name={post.name} />
            </div>
         </div>
       })
        return (
            <div className='container'>
                <div className='row main'>
                    {posts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

      posts: state.app.posts,

})

export default connect(mapStateToProps)(Home)
