import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import LargePost from './LargePost'
import Aside from './Aside'

import './Post.css'
import '../Home/Home.css'

export class ViewPost extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push('/')
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to={'/'} />
        }

        return (
          <div>
          <nav className='back-nav-container'>
              <div className='container'>
                  <div className='row back-middle-xs'>
                      <div className='col-xs-12'>
                          <div className='back-box'>
                              <button onClick={this.handleClick} className='back-button'>Back</button>
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
    isLoggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(ViewPost)
