import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

export class Post extends React.Component {
    constructor (props) {
        super(props)

    }

    renderEdit() {
          console.log(this.props.username, this.props.currentUser)
          if(this.props.username === this.props.currentUser) {
            return <Link to={`/edit/${this.props.postId}`} className='oval-button'>Edit</Link>
          }
    }
    render() {
        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr/>
                    <h1 className='post-heading'>{this.props.heading}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${this.props.profileId}`}>{this.props.name}</Link></p>
                    <p className='post-content'>{this.props.content}</p>
                    <div className='box-bottom'>
                        <Link to={`/post/${this.props.postId}`} className='oval-button'>Read</Link>
                        {this.renderEdit()}
                    </div>
                </div>
            </article>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.app.auth.currentUser
})

export default connect(mapStateToProps)(Post)
