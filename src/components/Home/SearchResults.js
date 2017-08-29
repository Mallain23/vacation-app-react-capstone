import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {fetchPosts} from '../actions/protected-data';

import Post from './Post'

export class SearchResults extends React.Component {

    render() {
       if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

       let posts = this.props.posts.map(({postId, title, username, profileId, destination, name}, index) => {

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
                    {posts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;

    return {
        loggedIn: currentUser !== null,
        posts: state.protectedData.searchResultPosts
    }
};

export default connect(mapStateToProps)(SearchResults)
