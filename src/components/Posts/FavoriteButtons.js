import React from 'react';
import  { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './Post.css'

import { addPostToFavorites, removePostFromFavorites } from '../actions/ajaxCallsToUserRoute'

export class FavoriteButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemoveFromFavoritesClick = this.handleRemoveFromFavoritesClick.bind(this);
        this.handleAddToFavoritesClick = this.handleAddToFavoritesClick.bind(this);
    };
    handleAddToFavoritesClick(e) {
        e.preventDefault();
        const { username, currentPost } = this.props;

        this.props.dispatch(addPostToFavorites(currentPost, username))
    };

    handleRemoveFromFavoritesClick(e) {
        e.preventDefault();

        const { username, profileId } = this.props;
        const { postId } = this.props.currentPost;

        this.props.dispatch(removePostFromFavorites(postId, username))
    };

    render() {
        const { favoritePosts } = this.props;
        const { postId } = this.props.currentPost;

        if (favoritePosts.some(post => post.postId === postId)) {
            return (
              <div className='post-buttons'>
                  <button onClick={this.handleRemoveFromFavoritesClick}
                        ref='btn'
                        className='oval-button post-button remove'>
                        <span className='remove-long-text'>Remove From Favorites</span>
                        <span className='remove-short-text'>R</span>
                  </button>
              </div>
            )
        }

        return (
            <div className='post-buttons'>
                <button onClick={this.handleAddToFavoritesClick}
                        ref='btn'
                        className='oval-button post-button add-btn'>
                        <span className='add-long-text'>Add to Favorites</span>
                        <span className='add-short-text'>A</span>
                </button>
            </div>
        );
    };
};

const mapStateToProps = state => {
  console.log(state.profile)
    const { currentPost } = state.postData;
    const { username } = state.auth.currentUser;
    const { favoritePosts } = state.profile.myProfile;


    return  {
        currentPost,
        favoritePosts: favoritePosts || [''],
        username
    };
};

export default connect(mapStateToProps)(FavoriteButtons)
