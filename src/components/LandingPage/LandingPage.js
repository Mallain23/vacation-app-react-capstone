import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import AppFeatures from './AppFeatures'
import About from './About';
import SignUp from './SignUp';

import './LandingPage.css';

import {testFunction} from '../actions/posts'

export class LandingPage extends React.Component {

    componentWillMount() {
      this.props.dispatch(testFunction())
    }
    render() {


      if (this.props.loggedIn) {
          return <Redirect to="/welcome" />;
      }

        return (
          <div>
          <div className='background-image-container'>
                <header id='landing-page-header'>
                    <Header />
                </header>
            </div>
                <div className='container'>
                <main>
                    <section>
                      <About />
                    </section>
                    <section>
                    </section>
                    <section>
                        <AppFeatures />
                    </section>
                    <section>
                      <SignUp />
                    </section>
                </main>
            </div>
            </div>
        )
    };
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  showLogin: state.auth.showLogin
})

export default connect(mapStateToProps)(LandingPage);
