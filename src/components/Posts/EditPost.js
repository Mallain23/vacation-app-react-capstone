import React from 'react'
import PostForm from './PostForm'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

export class EditPost extends React.Component {

    render() {
      console.log(this.props.postId)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='box edit-post'>
                            <h1 className='form-heading'>Edit Post</h1>
                            <PostForm {...this.props} isEditting={true}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    let postId = props.match.params.postId

    let postObj = state.app.posts.find(post => postId === post.postId.toString())

    return {
      content: postObj.content,
      heading: postObj.heading,
      postId
    }
};

export default connect(mapStateToProps)(EditPost)
