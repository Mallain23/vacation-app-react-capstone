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


export class App extends React.Component {

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
    console.log(state)
    return {
    isLoggedIn: state.app.auth.user !== null
  }
}
export default withRouter(connect(mapStateToProps)(App));
