import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

import {fetchPosts, increaseSliceIndex, resetSliceIndex} from '../actions/protected-data';
import { setEditPostToFalse, setEditProfileToFalse } from '../actions/profile';
import Post from './Post'
import Pagination from './Pagination'

export class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts(this.props.sliceIndex))
    };

    componentWillUnmount() {
        this.props.dispatch(setEditPostToFalse());
        this.props.dispatch(setEditProfileToFalse());
    };

    render() {
        const { loggedIn, posts, history } = this.props

        if (!loggedIn) {
            return <Redirect to="/" />;
        }

       let formattedPosts = posts.map(({destination, postId, title, username, profileId, name}, index) => {
            return (
               <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                  <div className='post-box' key={index}>
                      <Post key={index}
                      destination={destination}
                      postId={postId}
                      title={title}
                      username={username}
                      profileId={profileId}
                      name={name}
                      history={history} />
                  </div>
              </div>
           );
        });

        return (
            <div className='container'>
                <div className='row main'>
                    {formattedPosts}
                </div>
                <div className='row'>
                    <Pagination searchFunction={fetchPosts} />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    const { posts } = state.protectedData

    return {
        loggedIn: currentUser !== null,
        posts,
        sliceIndex: state.protectedData.sliceIndex
    };
};

export default connect(mapStateToProps)(Home)
