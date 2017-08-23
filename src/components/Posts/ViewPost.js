import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

import LargePost from './LargePost'
import Aside from './Aside'

export class ViewPost extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='row main'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='card-inner'>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-xs-12 col-md-3'>
                                        <Link to={`/profiles/${this.props.profileId}`}>{this.props.profileLogo}</Link>
                                    </div>
                                    <LargePost {...this.props} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Aside/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {

  let selectedPost = state.app.posts.find(post => {
   return post.postId.toString() === props.match.params.postId
  })
  console.log(selectedPost)
  let {heading, content, name, profileId, profileLogo } = selectedPost
  return {
     profileId,
     profileLogo,
     heading,
     content,
     name
   }
}

export default connect(mapStateToProps)(ViewPost)
