import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import { getUsersPosts } from '../actions/ajaxCallsToPostRoute';
import { getUserProfile} from '../actions/ajaxCallsToUserRoute'
import { sliceIndex, amount } from '../Home/utils'

import LargePost from './LargePost'
import Aside from './Aside'

import './Post.css'
import '../Home/Home.css'

export class ViewPost extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    };

    handleClick() {
        this.props.history.push('/')
    };

    handleProfileClick(e) {
          e.preventDefault()
          const { profileId } = this.props

          this.props.dispatch(getUserProfile(profileId))
          .then(({profile: {username}}) => this.props.dispatch(getUsersPosts(username, sliceIndex, amount)))
          .then(() => this.props.history.push(`/profile/${profileId}`))
    }
    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to={'/'} />
        }

        return (
          <div>
          <nav className='back-nav-container'>
              <div className='container extra-nav'>
                  <div className='row back-middle-xs'>
                      <div className='col-xs-6 col-md-1'>
                          <div className='back-box'>
                              <button onClick={this.handleClick} className='back-button'>Home</button>
                          </div>
                      </div>
                      <div className='col-xs-6 col-md-1'>
                          <div className='back-box'>
                              <button onClick={this.handleProfileClick} className='back-button my-profile-btn'>My Profile</button>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
            <div className='container'>
                <div className='row main'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='card-inner'>
                            <div className='box'>
                               <LargePost {...this.props}/>
                            </div>
                        </div>
                    </div>
                    <Aside {...this.props} />
                </div>
            </div>
          </div>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.currentUser !== null,
    profileId: state.profile.myProfile.profileId
})

export default connect(mapStateToProps)(ViewPost)
