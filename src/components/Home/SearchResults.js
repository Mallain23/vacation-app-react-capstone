import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

import Pagination from './Pagination'
import { setEditProfileToFalse } from '../actions/profile';
import { setEditPostToFalse } from '../actions/posts'
import {searchForPosts}  from '../actions/ajaxCallsToPostRoute'
import Post from './Post'

export class SearchResults extends React.Component {

    componentWillUnMount () {
      this.props.dispatch(setEditPostToFalse());
      this.props.dispatch(setEditProfileToFalse());
    };

    render() {

       if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        const { posts } = this.props

        if (posts.length < 1) {
            alert("There were no results that matched your search criteria, please refine your search!")
            return <Redirect to="/welcome" />
        }

        const formattedPosts = this.props.posts.map(({postId, title, username, profileId, destination, name}, index) => {

            return  <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                <div className='post-box' key={index}>
                    <Post key={index}
                          postId={postId}
                          title={title}
                          username={username}
                          profileId={profileId}
                          destination={destination}
                          name={name} />
                </div>
             </div>
        })

        return (
            <div className='container'>
                <div className='row main'>
                    {formattedPosts}
                    <Pagination searchFunction={searchForPosts}  />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const {currentUser} = state.auth;

    return {
        loggedIn: currentUser !== null,
        posts: state.postData.searchResultPosts
    };
};

export default connect(mapStateToProps)(SearchResults)