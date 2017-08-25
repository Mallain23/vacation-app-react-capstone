import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {fetchPosts} from '../actions/protected-data';

import Post from './Post'

export class Home extends React.Component {

    componentDidMount() {
        if (!this.props.loggedIn) {
           return;
       }

       this.props.dispatch(fetchPosts());
    }

    render() {
       if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        console.log(this.props.posts)
       let posts = this.props.posts.map((post, index) => {

        return  <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
            <div className='post-box' key={index}>
                <Post key={index} postId={post.postId} title={post.title} username={post.username} profileId={post.profileId} destination={post.destination} name={post.name} title={post.title}/>
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
        username: currentUser ? state.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        posts: state.protectedData.posts
    };
};

export default connect(mapStateToProps)(Home)
