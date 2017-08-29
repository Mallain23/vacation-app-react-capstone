import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {fetchSelectedPost, searchForPosts } from '../actions/protected-data'

export class Aside extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({ post }) => this.props.dispatch(searchForPosts(post.destination, 6)))
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

            formattedPosts = relatedPosts.map(({postId, title}, index) => {
                return <li key={index} className='related-posts'>
                    <Link to={`/post/${postId}`}>{title}</Link>
                  </li>
            })
        }

        return (
            <div className='col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    {formattedPosts}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {relatedPosts} = state.protectedData.searchResultPosts

    return {
        relatedPosts: relatedPosts || []
    }
};

export default connect(mapStateToProps)(Aside)
