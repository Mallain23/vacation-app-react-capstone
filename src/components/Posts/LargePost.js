import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import { fetchSelectedPost } from '../actions/ajaxCallsToPostRoute'
import {  fetchSelectedUser } from '../actions/ajaxCallsToUserRoute'

export class LargePost extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))
        .then(({post: {username: username}}) => {

          this.props.dispatch(fetchSelectedUser(username))})
    };

    render() {

        const { title,
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
                avatar } = this.props

        return (
            <div className='row'>
                <div className='col-xs-12 col-md-3'>
                   <Link to={`/profiles/${profileId}`}>{avatar}</Link>
                </div>
                <div className='col-xs-12 col-md-9'>
                    <hr className='hr'/>
                    <h1 className='large-post-title'>{title}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${profileId}`}>{username}</Link></p>
                    <p className='large-post-destination'>Destination: {destination}</p>
                    <p className='large-post-lodging'>Lodging: {lodging}</p>
                    <p className='large-post-dining'>Dining: {dining}</p>
                    <p className='large-post-sites'>Sites: {sites}</p>
                    <p className='large-post-activities'>Activities: {activities}</p>
                    <p className='large-post-advice'>Advice: {advice}</p>
                    <p className='large-post-rating'>Rating: {rating}</p>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {

  return Object.assign({}, state.postData.currentPost, state.postData.viewUser)
};

export default connect(mapStateToProps)(LargePost)
