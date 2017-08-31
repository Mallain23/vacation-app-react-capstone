import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header'
import About from './About'
import SignUp from './SignUp'
import LoginModal from '../Login/LoginModal'
import {testFunction} from '../actions/posts'

export class LandingPage extends React.Component {

    componentWillMount() {
      this.props.dispatch(testFunction())
    }
    render() {


      if (this.props.loggedIn) {
          return <Redirect to="/welcome" />;
      }

      else if (this.props.showLogin) {
        return <LoginModal />
      }

        return (
            <div className='container'>
                <header id='landing-page-header'>
                    <Header />
                </header>
                <main>
                    <section>
                      <About />
                    </section>
                    <section>
                      Placeholder about using app
                    </section>
                    <section>
                      Placeholder about using app
                    </section>
                    <section>
                      <SignUp />
                    </section>
                </main>
            </div>
        )
    };
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  showLogin: state.auth.showLogin
})

export default connect(mapStateToProps)(LandingPage);
