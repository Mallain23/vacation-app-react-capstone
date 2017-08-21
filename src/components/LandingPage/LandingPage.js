import React from 'react'
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Header from './Header'
import About from './About'
import SignUp from './SignUp'
import LoginModal from '../Login/LoginModal'

export class LandingPage extends React.Component {

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
  showLogin: state.showLogin
})

export default connect(mapStateToProps)(LandingPage);
