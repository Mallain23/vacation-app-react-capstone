import React from '/react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Aside extends React.Component {

    render() {
        const relatedPosts = this.props.related.map((post, index) =>{
          <li key={index} className='related-posts'><Link to={`/profiles/${post.profileId}`}>post.title</Link></li>
        })

        return(
            <div className'col-xs-12 col-lg-4'>
                <p>Related Posts</p>
                <ul>
                    {relatedPosts}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  related: state.related
})

export default connect(mapStateToProps)(Aside)
