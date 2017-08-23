import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

export class LargePost extends React.Component {

    render() {
        return (
            <div className='col-xs-12 col-md-9'>
                <hr className='hr'/>

                <h1 className='large-post-heading'>{this.props.heading}</h1>
                <p className='font-accent'>by  <Link to={`/profile/${this.props.profileId}`}>{this.props.name}</Link></p>
                <p className='large-post-content'>{this.props.content}</p>
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => {
//   let selectedPost = state.posts.find(post => {
//   return post.postId.toString() === props.match.params.postId
//   })
//
//   let {heading, content, name, profileId} = selectedPost
//   return {
//     heading,
//     content,
//     name,
//     profileId
//   }
// }

export default connect()(LargePost)
