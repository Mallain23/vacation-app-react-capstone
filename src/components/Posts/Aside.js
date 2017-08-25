import React from 'react'
import {connect} from 'react-redux'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {fetchSelectedPost, fetchRelatedPosts} from '../actions/protected-data'

export class Aside extends React.Component {
    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(postObj => {
        this.props.dispatch(fetchRelatedPosts(5, postObj.post.destination))
    })
}

    render() {

      console.log(this.props.relatedPosts)
      const relatedPosts = this.props.relatedPosts.map((post, index) => {
      return   <li key={index} className='related-posts'><Link to={`/post/${post.postId}`}>{post.title}</Link></li>
      })
      console.log(relatedPosts)
        return(
            <div className='col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    {relatedPosts}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    relatedPosts: state.protectedData.relatedPosts
  }
}

export default connect(mapStateToProps)(Aside)
