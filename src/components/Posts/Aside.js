import React from 'react'
import {connect} from 'react-redux'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {fetchSelectedPost, searchForPosts} from '../actions/protected-data'

export class Aside extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(postObj => this.props.dispatch(searchForPosts(postObj.post.destination, 6)))
    }

    render() {
      let formattedPosts
      let relatedPosts

          if (this.props.relatedPosts.length < 1 ) {
                formattedPosts = 'There are no related posts available'
            }
            else {
                relatedPosts = this.props.relatedPosts.filter(post => {
                    return post.postId !== this.props.match.params.postId
              })

              formattedPosts = relatedPosts.map((post, index) => {
                  return <li key={index} className='related-posts'><Link to={`/post/${post.postId}`}>{post.title}</Link></li>
            })
          }


        return(
            <div className='col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    {formattedPosts}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({

    relatedPosts: state.protectedData.searchResultPosts

})

export default connect(mapStateToProps)(Aside)
