import React from 'react'
import {connect} from 'react-redux'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export class Aside extends React.Component {

    render() {
        console.log(this.props.related)
        const relatedPosts = this.props.related.map((post, index) =>{
          <li key={index} className='related-posts'><Link to={`/post/${post.postId}`}>{post.heading}</Link></li>
        })

        return(
            <div className='col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    hello world
                    {relatedPosts}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  related: state.app.relatedPosts
})

export default connect(mapStateToProps)(Aside)
