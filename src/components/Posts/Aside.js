import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {fetchSelectedPost, searchForPosts }  from '../actions/ajaxCallsToPostRoute'
import { fetchSelectedUser } from '../actions/ajaxCallsToUserRoute'


export class Aside extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(e) {
        const postId = e.target.value
        const numberOfResults = 6
        this.props.history.push(`/post/${postId}`)

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({ post: {destination: destination} }) => this.props.dispatch(searchForPosts(destination, numberOfResults)))

    };

    componentWillMount() {
        const postId = this.props.match.params.postId
        const numberOfResults = 6

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({ post: {destination: destination }}) => this.props.dispatch(searchForPosts(destination, numberOfResults)))
    };

    render() {

        let formattedPosts
        const { relatedPosts } = this.props
        
        if (relatedPosts.length < 2 ) {
            formattedPosts = 'There are no related posts available'
        }

        else {

            const filteredPosts = relatedPosts.filter(({ postId }) => postId !== this.props.match.params.postId)

            formattedPosts = filteredPosts.map(({postId, title}, index) => {
                return (
                    <li key={index} className='related-posts'>
                      <button value={postId} onClick={this.handleClick}>{title}</button>
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
    const { searchResultPosts } = state.postData

    return {
        relatedPosts: searchResultPosts || []
    };
};

export default connect(mapStateToProps)(Aside)
