import React from 'react'
import PostForm from './PostForm'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

export class EditPost extends React.Component {


    render() {

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


const mapStateToProps = state => ({

  username: state.auth.currentUser.username,
  name: `${state.auth.currentUser.firstName} ${state.auth.currentUser.lastName}`
})

export default connect(mapStateToProps)(EditPost)
