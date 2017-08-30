import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {fetchSelectedPost, searchForPosts } from '../actions/protected-data'

export class Aside extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({ post }) => this.props.dispatch(searchForPosts(post.destination, 6)))
    };

    render() {

        let formattedPosts
        const { relatedPosts } = this.props

        if (relatedPosts.length < 1 ) {
            formattedPosts = 'There are no related posts available'
        }

        else {
            const filteredPosts = relatedPosts.filter(({ postId }) => postId !== this.props.match.params.postId)

            formattedPosts = filteredPosts.map(({postId, title}, index) => {
                return (
                    <li key={index} className='related-posts'>
                      <Link to={`/post/${postId}`}>{title}</Link>
                    </li>
                );
            });
        }
  
        return (
            <div className='col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    {formattedPosts}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { searchResultPosts } = state.protectedData

    return {
        relatedPosts: searchResultPosts || []
    }
};

export default connect(mapStateToProps)(Aside)
