import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import {connect} from 'react-redux'


import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import ProfilePage from './components/Profile/ProfilePage'

// import Profile from './components/Profile/ProfilePage'
// import ViewPost from './components/Posts/ViewPost'
// import CreatePost from './components/Posts/CreatePost'


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                  <Navigation />
                  <Route exact path='/' component={Home} />
                  <Route exact path='/profile/:profileId' component={ProfilePage} />
                </div>
            </Router>
        )
    }
}
// <Route exact path='/' component={Home} />
//<Route exact path='/' component={LandingPage} />

const mapStateToProps = state => ({
    isLoggedIn: state.auth.user !== null
})
export default connect(mapStateToProps)(App)
