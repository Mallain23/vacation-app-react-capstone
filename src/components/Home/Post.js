import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class Post extends React.Component {

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
                    </div>
                </div>
            </article>
        )
    }
}
