import React from 'react'
import { connect } from 'react-redux'

import { getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import { getFavoritePosts } from '../actions/profile'
import { resetSliceIndex } from '../actions/posts'
import { sliceIndex, amount } from './utils'

export class ProfileButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleViewUserPostsClick = this.handleViewUserPostsClick.bind(this);
        this.handleGetFavoritesClick = this.handleGetFavoritesClick.bind(this)
    }

    handleViewUserPostsClick(e) {
        e.preventDefault();
        const { username } = this.props;

        this.props.dispatch(resetSliceIndex())
        this.props.dispatch(getUsersPosts(username, sliceIndex, amount));
    };

    handleGetFavoritesClick(e) {
        e.preventDefault();
        const { currentProfile } = this.props

        this.props.dispatch(getFavoritePosts(sliceIndex, sliceIndex + 1));
    };

    render() {
        const { profileView } = this.props

        const postDisabled = profileView === 'POSTS' ? true : false
        const favoritesDisabled = profileView === 'FAVORITES' ?  true : false

        return (
            <div className='prof-btn-container'>
                <button
                    className='oval-button profile-post-btn user-posts-btn'
                    disabled={postDisabled}
                    onClick={this.handleViewUserPostsClick}>
                     <span className='post-long-text'>Users Posts</span>
                     <span className='post-short-text'>Posts</span>
                </button>
                <button
                    className='oval-button profile-post-btn user-favorites-btn'
                    onClick={this.handleGetFavoritesClick}
                    disabled={favoritesDisabled}>
                    <span className='favorites-long-text'>Users Favorites</span>
                    <span className='favorites-short-text'>Fav</span>
                </button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { username } = state.profile.currentProfile
    const { currentProfile, profileView } = state.profile


    return {
        username,
        currentProfile,
        profileView
    };
};

export default connect(mapStateToProps)(ProfileButtons)
