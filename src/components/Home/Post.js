import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {deletePost} from '../actions/protected-data'

export class Post extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    renderAdditionalButtons() {

          if(this.props.username === this.props.currentUser) {
            return (
                <span>
                    <Link to={`/edit/${this.props.postId}`} className='oval-button'>Edit</Link>
                    <button className='oval-button' onClick={this.handleClick} > Delete </button>
                </span>
              )
          }
    }

    handleClick(e) {
      e.preventDefault()
      this.props.dispatch(deletePost(this.props.postId))
    }
    render() {
        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr/>
                    <h1 className='post-heading'>{this.props.title}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${this.props.profileId}`}>{this.props.name}</Link></p>
                    <p className='post-destination'>{this.props.destination}</p>
                    <div className='box-bottom'>
                        <Link to={`/post/${this.props.postId}`} className='oval-button'>Read</Link>
                        {this.renderAdditionalButtons()}
                    </div>
                </div>
            </article>
        )
    }
}

const mapStateToProps = state => {
  console.log(state.auth)
  return {
    currentUser: state.auth.currentUser.username
  }
}

export default connect(mapStateToProps)(Post)
