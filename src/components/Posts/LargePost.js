import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import { fetchSelectedPost } from '../actions/ajaxCallsToPostRoute'
import {  fetchSelectedUser } from '../actions/ajaxCallsToUserRoute'

import PostButtons from './PostButtons'

import '../Home/Home.css'
import './Post.css'

export class LargePost extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({post: {username}}) => {

          this.props.dispatch(fetchSelectedUser(username))})
    };

    renderPostButtons() {

    }

    render() {

        const {
            title,
            profileId,
            destination,
            lodging,
            dining,
            sites,
            activities,
            advice,
            rating,
            username,
            postId,

       } = this.props.currentPost

       const { avatar } = this.props.viewUser;
        return (
            <div className='row'>
                <div className='col-xs-12 col-md-3'>
                   <Link to={`/profiles/${profileId}`}>{avatar}</Link>
                </div>
                <div className='col-xs-12 col-md-9'>
                    <hr className='divider'/>
                    <h1 className='large-post-title post-heading'>{title}</h1>
                    <p className='font-accent author'>by  <Link className='profile-link' to={`/profile/${profileId}`}>{username}</Link></p>
                    <p className='large-post destination'><span className='bold'>Destination:</span> {destination}</p>
                    <p className='large-post lodging'><span className='bold'>Lodging:</span> {lodging}</p>
                    <p className='large-post dining'><span className='bold'>Dining:</span> {dining}</p>
                    <p className='large-post sites'><span className='bold'>Sites:</span> {sites}</p>
                    <p className='large-post activities'><span className='bold'>Activities:</span> {activities}</p>
                    <p className='large-post advice'><span className='bold'>Advice:</span> {advice}</p>
                    <p className='large-post rating'><span className='bold'>Rating:</span> {rating}</p>
                    <PostButtons />{this.renderPostButtons()}
                </div>

            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
   const { currentPost, viewUser } = state.postData
   const { editPost } = state.profile

   return  {
        currentPost,
        viewUser,
        editPost
    };
};

export default connect(mapStateToProps)(LargePost)
