import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './Home.css'

export class Post extends React.Component {

    render() {
        const {
            title,
            profileId,
            destination,
            postId,
            username
        } = this.props

        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr className='divider'/>
                    <h1 className='post-heading'>{title}</h1>
                    <p className='font-accent author'>by  <Link to={`/profile/${profileId}`}>{username}</Link></p>
                    <p className='post-destination'>{destination}</p>
                    <div className='box-bottom'>
                        <p className='button-container'><Link to={`/post/${postId}`} className='oval-button'>Read</Link></p>
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

export default connect(mapStateToProps)(Post)
