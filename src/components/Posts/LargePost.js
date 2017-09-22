import React from 'react';
import {connect} from 'react-redux';

import { fetchSelectedPost, getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import {  fetchSelectedUser, getUserProfile, removePostFromFavorites  } from '../actions/ajaxCallsToUserRoute';
import { resetSliceIndex } from '../actions/posts'
import { getAvatarString } from '../Profile/utils';
import { sliceIndex, amount } from '../Home/utils';
import { REMOVED_LANGUAGE } from './utils'

import PostButtons from './PostButtons';
import FavoriteButtons from './FavoriteButtons';

import '../Home/Home.css';
import './Post.css';

export class LargePost extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        const postId = this.props.match.params.postId;
        const { username } = this.props.currentUser;

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({post}) => {
          if (!post.postId) {
              alert(REMOVED_LANGUAGE)
              this.props.dispatch(removePostFromFavorites(postId, username))
              .then(() => this.props.history.push('/'));
          }

          this.props.dispatch(fetchSelectedUser(post.username))});
    };

    renderPostButtons() {
        const { currentUser, viewUser } = this.props;

        return currentUser.username === viewUser.username ? <PostButtons {...this.props}/> : <FavoriteButtons {...this.props} />;
    };

    handleClick(e) {
        e.preventDefault();
        const { profileId } = this.props;

        this.props.dispatch(resetSliceIndex());
        this.props.dispatch(getUserProfile(profileId))
        .then(({profile: {username}}) => this.props.dispatch(getUsersPosts(username, sliceIndex, amount)))
        .then(() => this.props.history.push(`/profile/${profileId}`));
    };

    render() {

        const {
            title,
            destination,
            lodging,
            dining,
            sites,
            activities,
            advice,
            rating,
            username

       } = this.props.currentPost;

       const { firstName, lastName } = this.props;
       const avatarString = getAvatarString(firstName, lastName)

        return (
            <div className='row'>
                <div className='col-xs-12 col-md-3'>
                    <div className='profile-avatar large-avatar'>
                        {avatarString}
                    </div>
                </div>
                <div className='col-xs-12 col-md-9 post-container'>
                    <hr className='divider'/>
                    <h1 className='large-post-title post-heading'>{title}</h1>
                    <p className='font-accent author'>by  <a className='profile-link' onClick={this.handleClick}>{username}</a></p>
                    <p className='large-post destination'><span className='bold'>Destination:</span> {destination}</p>
                    <p className='large-post lodging'><span className='bold'>Lodging:</span> {lodging}</p>
                    <p className='large-post dining'><span className='bold'>Dining:</span> {dining}</p>
                    <p className='large-post sites'><span className='bold'>Sites:</span> {sites}</p>
                    <p className='large-post activities'><span className='bold'>Activities:</span> {activities}</p>
                    <p className='large-post advice'><span className='bold'>Advice:</span> {advice}</p>
                    <p className='large-post rating'><span className='bold'>Rating:</span> {rating}</p>
                    {this.renderPostButtons()}
                </div>

            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
   const { currentPost, viewUser } = state.postData
   const { username, firstName, lastName } = state.postData.viewUser
   const { currentUser } = state.auth
   const { editPost } = state.profile

   return  {
        currentPost,
        viewUser,
        firstName: firstName || '',
        lastName: lastName || '',
        username,
        editPost,
        currentUser
    };
};

export default connect(mapStateToProps)(LargePost);
