import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {fetchPosts} from '../actions/protected-data';

import Post from './Post'

export class Home extends React.Component {

    componentDidMount() {
        return this.props.loggedIn ? this.props.dispatch(fetchPosts()) : ''

    }

    render() {
       if (!this.props.loggedIn) {

            return <Redirect to="/" />;
        }
        console.log("hi")
       let posts = this.props.posts.map(({destination, postId, title, username, profileId, name}, index) => {
            console.log(this.props)
            return  <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                <div className='post-box' key={index}>
                    <Post key={index}
                    destination={destination}
                    postId={postId}
                    title={title}
                    username={username}
                    profileId={profileId}
                    name={name}
                    history={this.props.history}
                      />
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
        posts: state.protectedData.posts
    };
};

export default connect(mapStateToProps)(Home)
