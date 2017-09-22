import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { resetSliceIndex } from '../actions/posts'
import { getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import { getUserProfile} from '../actions/ajaxCallsToUserRoute';
import { sliceIndex, amount } from './utils';

import './Home.css'

export class Post extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
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
            postId,
            username
        } = this.props;

        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr className='divider'/>
                    <h1 className='post-heading'>{title}</h1>
                    <p className='font-accent author'>by  <a  className='profile-link' onClick={this.handleClick}>{username}</a></p>
                    <p className='post-destination'>{destination}</p>
                    <div className='box-bottom'>
                        <p className='button-container'><Link to={`/post/${postId}`} className='oval-button oval-button-post'>Read</Link></p>
                    </div>
                </div>
            </article>
        );
    };
};

const mapStateToProps = state => {
    const { editPost } = state.profile

    return {
        currentUser: state.auth.currentUser,
        editPost
    };
};

export default connect(mapStateToProps)(Post);
