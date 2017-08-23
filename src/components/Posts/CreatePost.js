import React from 'react'
import PostForm from './PostForm'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class CreatePost extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='box create-post'>
                            <h1 className='form-heading'>Create New Post</h1>
                            <PostForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
