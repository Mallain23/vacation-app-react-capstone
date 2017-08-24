import React from 'react'
import {Route, withRouter} from 'react-router-dom';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import {connect} from 'react-redux'


import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import ProfilePage from './components/Profile/ProfilePage'
import EditPost from './components/Posts/EditPost'
// import Profile from './components/Profile/ProfilePage'
import ViewPost from './components/Posts/ViewPost'
import CreatePost from './components/Posts/CreatePost'

import {refreshAuthToken} from './components/actions/auth';


export class App extends React.Component {
    componentDidMount() {
        if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in
      // localStorage
            this.props.dispatch(refreshAuthToken());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        }
        else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000);
    };

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
    }

    clearInterval(this.refreshInterval);
    }

    render() {
        return (

                <div>
                  <Navigation />
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/welcome' component={Home} />
                  <Route exact path='/profile/:profileId' component={ProfilePage} />
                  <Route exact path='/create-post' component={CreatePost} />
                  <Route exact path='/post/:postId' component={ViewPost} />
                  <Route exact path='/edit/:postId' component={EditPost} />
                </div>

        )
    }
}
// <Route exact path='/' component={Home} />
//<Route exact path='/' component={LandingPage} />

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? state.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        protectedData: state.protectedData.data
    };
};

export default withRouter(connect(mapStateToProps)(App));
